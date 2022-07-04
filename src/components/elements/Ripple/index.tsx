import {
    MouseEventHandler,
    TouchEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';

const getRippleEffect = (
    evtCX: number,
    evtCY: number,
    domRect: DOMRect,
    isPosCenter: boolean,
) => {
    const size =
        domRect.width > domRect.height ? domRect.width : domRect.height;
    if (isPosCenter) {
        return {
            x: 0,
            y: 0,
            size,
        };
    }
    const x = evtCX - domRect.left - size / 2;
    const y = evtCY - domRect.top - size / 2;
    return {
        x,
        y,
        size,
    };
};

const Ripple = ({
    duration = 500,
    color = '#ddd',
    posCenter = false,
}: {
    duration?: number;
    color?: string;
    posCenter?: boolean;
}) => {
    const [isRippling, setIsRippling] = useState(false);
    const [isMouseUp, setIsMouseUp] = useState(false);
    const isDisappearing = isRippling && isMouseUp;
    const disappearTimer = useRef<any>(null);
    const [rippleEffect, setRippleEffect] = useState<
        { x: number; y: number; size: number } | undefined
    >(undefined);

    const addRipple: MouseEventHandler = (e) => {
        if (isRippling) return;
        setIsRippling(true);
        const rippleContainer = e.currentTarget.getBoundingClientRect();
        setRippleEffect(
            getRippleEffect(e.clientX, e.clientY, rippleContainer, posCenter),
        );
    };

    const addRippleTouch: TouchEventHandler = (e) => {
        if (isRippling) return;
        setIsRippling(true);
        const rippleContainer = e.currentTarget.getBoundingClientRect();
        setRippleEffect(
            getRippleEffect(
                e.touches[0].clientX,
                e.touches[0].clientY,
                rippleContainer,
                posCenter,
            ),
        );
    };

    useEffect(() => {
        const disappearRipple = () => {
            if (!isRippling || isDisappearing) return;
            setIsMouseUp(true);
            const timer = setTimeout(() => {
                setIsMouseUp(false);
                setIsRippling(false);
                setRippleEffect(undefined);
            }, duration);
            disappearTimer.current = timer;
        };
        window.addEventListener('mouseup', disappearRipple);
        window.addEventListener('touchend', disappearRipple);
        return () => {
            window.removeEventListener('mouseup', disappearRipple);
            window.removeEventListener('touchend', disappearRipple);
        };
    }, [isDisappearing, isRippling, duration]);

    // timer 정리 안함으로인한 memory leak error 방지
    useEffect(() => {
        return () => {
            const timer = disappearTimer.current;
            if (timer) clearTimeout(timer);
        };
    }, []);

    return (
        <div
            className="ripple_container"
            onTouchStart={addRippleTouch}
            onMouseDown={addRipple}
        >
            {rippleEffect ? (
                <div
                    className="ripple_effect"
                    style={{
                        top: rippleEffect.y + 'px',
                        left: rippleEffect.x + 'px',
                        width: rippleEffect.size + 'px',
                        height: rippleEffect.size + 'px',
                        opacity: isDisappearing ? '0' : '0.4',
                        '--color': color,
                        '--duration': duration + 'ms',
                    }}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Ripple;
