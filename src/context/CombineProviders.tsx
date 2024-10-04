// combineComponents.tsx
import React, { FC, ReactNode } from 'react';

interface Props {children: ReactNode}

/**
 * Combine different providers into one component.
 * @param components
 */
export const combineComponents = (...components: FC<Props>[]): FC<Props> => {
    return components.reduce(
        (AccumulatedComponents: FC<Props>, CurrentComponent: FC<Props>) => {
            return ({ children }: Props) => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                );
            };
        },
        ({ children }: Props) => <>{children}</>,
    );
};
