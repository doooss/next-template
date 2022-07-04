import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLockedBody } from 'usehooks-ts';

import useRouterEx from './useRouterEx';

interface Values {
    [key: string]: string;
}

interface IPortal {
    children?: ReactNode;
}

/*
    1. modal= '' <-- 해당 url query 여부에따라 모달창을 열고 닫아주는 훅
    
    사용법

    1. useModal()등록 <-- modalName, query는 옵션
    2. 해당 컴포넌트에 <~~.Portal> </~~.Portal> 작성
    3. 해당 부분에 띄워줄 창 작성
    4. openModal , closeModal 키기, 닫기 

*/

const useModal = (modalName = 'o', addQuery = {}) => {
    const routerEx = useRouterEx();
    /* eslint-disable-next-line */
    const [locked, setLocked] = useLockedBody();

    const openModal = () => {
        routerEx.pushQuery({ ...addQuery, modal: modalName });
    };
    const replaceModal = (changeModalName = 'c', values = {}) => {
        const urlQueries = routerEx.query as Values;
        Object.keys(addQuery).map((el) => {
            delete urlQueries[el];
        });

        routerEx.pushQuery({
            ...urlQueries,
            ...values,
            modal: changeModalName,
        });
    };

    const closeModal = () => {
        routerEx.back();
    };

    const modalState = typeof routerEx.query?.modal === 'string' ? true : false;

    useEffect(() => {
        if (modalState) {
            setLocked(true);
        } else {
            setLocked(false);
        }
    }, [modalState, setLocked]);

    const Portal = ({ children }: IPortal) => {
        const ref = useRef<Element | null>();
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);

            if (document) {
                const dom = document.getElementById('root_modal');
                ref.current = dom;
            }
        }, []);

        /*
            ESC 클릭시 모달창 닫아지는 이벤트 추가
        */
        useEffect(() => {
            if (!window || !mounted || !modalState) return;

            const keydownEvent = (e: KeyboardEvent) => {
                e.preventDefault();
                if (e.key === 'Escape' || e.key === 'Esc') {
                    closeModal();
                    window?.removeEventListener('keydown', keydownEvent);
                }
            };
            window.addEventListener('keydown', keydownEvent);
        }, [mounted]);

        if (ref.current && mounted && modalState) {
            return createPortal(
                <>
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '100vw',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <div style={{ zIndex: 1001 }}>{children}</div>
                        <div
                            style={{
                                width: '100%',
                                maxWidth: '100vw',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                zIndex: 1000,
                            }}
                            onClick={closeModal}
                        />
                    </div>
                </>,
                ref.current,
            );
        }
        return null;
    };
    return {
        openModal,
        closeModal,
        replaceModal,
        Portal,
    };
};

export default useModal;
