import React, { ReactNode, ComponentProps, ElementType } from 'react';
import styles from './Animation.module.scss';

type AnimationOwnProps<E extends ElementType = ElementType> = {
    as?: E; // тег б по умолчанию div
    children: ReactNode | string, // анимируемый элемент
    animationName: string, //класс анимации     
    elements:number, // количество элементов анимации
    index: number,// индекс элемента
    stepDelay?: number, //промежуток задержки
    delay?: number // задержка перед началом анимации
    className?: string,
    callback?: (...props: any) => any
};

type TextProps<E extends ElementType> = AnimationOwnProps<E> &
    Omit<ComponentProps<E>, keyof AnimationOwnProps>;

const defaultElement = 'div';

export default function Animation<E extends ElementType = typeof defaultElement>(
    { children,
        as,
        animationName,
        stepDelay = 0.2,
        elements ,
        index = 0,
        delay = 0,
        className = '',
        callback = () => { }
    }: TextProps<E>
) {

    const Tag = as || defaultElement;
    let animationDelay = index === 0 ? delay : (index + 1) * stepDelay + delay;
    const aninationDuration = elements * stepDelay;

    return (
        <Tag
            className={`
                ${animationName?  animationName: styles['animation']} 
                ${className ? className : ''}
            `}
            style={
                {
                    animationDelay: animationDelay + 's',
                    animationDuration: aninationDuration + 's'
                }
            }
            onClick={callback}
        >
            {children}
        </Tag>
    )
}