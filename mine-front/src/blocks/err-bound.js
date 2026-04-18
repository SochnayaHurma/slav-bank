import { Component, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Notice } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';

class BlockErrorBoundaryInner extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			hasError: false,
			error: null,
			info: null,
		};

		this.reset = this.reset.bind( this );
	}

	static getDerivedStateFromError( error ) {
		return {
			hasError: true,
			error,
		};
	}

	componentDidCatch( error, info ) {
		const { blockName = 'unknown-block', onCaughtError } = this.props;

		console.error( `[${ blockName }] render error`, error, info );

		this.setState( { info } );

		if ( typeof onCaughtError === 'function' ) {
			onCaughtError( error, info );
		}
	}

	reset() {
		this.setState( {
			hasError: false,
			error: null,
			info: null,
		} );
	}

	render() {
		const { hasError, error, info } = this.state;
		const { children, debug = true, fallback = null } = this.props;

		if ( hasError ) {
			if ( fallback ) {
				return fallback;
			}

			return (
				<div className="acme-block-error-boundary">
					<Notice status="error" isDismissible={ false }>
						<strong>{ __( 'Ошибка в блоке.', 'acme-blocks' ) }</strong>
						<div style={ { marginTop: '8px' } }>
							{ error?.message || __( 'Неизвестная ошибка.', 'acme-blocks' ) }
						</div>

						{ debug && info?.componentStack && (
							<pre
								style={ {
									marginTop: '12px',
									whiteSpace: 'pre-wrap',
									fontSize: '12px',
									maxHeight: '240px',
									overflow: 'auto',
								} }
							>
								{ info.componentStack }
							</pre>
						) }

						<div style={ { marginTop: '12px' } }>
							<Button variant="secondary" onClick={ this.reset }>
								{ __( 'Сбросить состояние ошибки', 'acme-blocks' ) }
							</Button>
						</div>
					</Notice>
				</div>
			);
		}

		return children;
	}
}

export function BlockErrorBoundary( {
	children,
	blockName = 'acme-block',
	debug = true,
	fallback = null,
} ) {
	const { createErrorNotice } = useDispatch( noticesStore );

	const handleCaughtError = useCallback(
		( error ) => {
			const message =
				error?.message
					? `[${ blockName }] ${ error.message }`
					: `[${ blockName }] ${ __( 'Неизвестная ошибка рендера.', 'acme-blocks' ) }`;

			createErrorNotice( message, {
				type: 'snackbar',
				explicitDismiss: true,
			} );
		},
		[ blockName, createErrorNotice ]
	);

	return (
		<BlockErrorBoundaryInner
			blockName={ blockName }
			debug={ debug }
			fallback={ fallback }
			onCaughtError={ handleCaughtError }
		>
			{ children }
		</BlockErrorBoundaryInner>
	);
}

export function useSafeHandler( blockName = 'acme-block' ) {
	const { createErrorNotice } = useDispatch( noticesStore );

	return useCallback(
		( label, fn ) =>
			( ...args ) => {
				try {
					return fn( ...args );
				} catch ( error ) {
					console.error( `[${ blockName }] handler error: ${ label }`, error, {
						args,
					} );

					createErrorNotice(
						`[${ blockName }] ${ label }: ${ error?.message || 'Unknown error' }`,
						{
							type: 'snackbar',
							explicitDismiss: true,
						}
					);
				}
			},
		[ blockName, createErrorNotice ]
	);
}