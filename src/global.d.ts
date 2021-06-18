import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'hcl-sdk': any
            'hcl-sdk-map': any
        }
    }
}