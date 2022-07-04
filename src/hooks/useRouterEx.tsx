import { useRouter } from 'next/router';

type Values = {
    [key: string]: string;
};
/*
    useRouter 보충기능, Query문을 주로 다룸
*/

const useRouterEx = () => {
    const router = useRouter();

    // asPath 중 query삭제
    const asPathWithoutQueries = router.asPath.split('?')[0];

    // query 유지한채 쿼리 추가 중복일 경우 대체
    const pushQuery = (queriesObject: Values) => {
        router.push({
            pathname: asPathWithoutQueries,
            query: { ...router.query, ...queriesObject },
        });
    };

    // 아예 query 다 삭제후 입력값으로 대체
    const replaceQuery = (queriesObject: Values) => {
        router.push({
            pathname: asPathWithoutQueries,
            query: { ...queriesObject },
        });
    };

    // queryKey string[] 제거
    const removeQuery = (queryKey: string[]) => {
        const urlQueries = router.query as Values;
        if (urlQueries === undefined) {
            throw new Error(
                'url query가 존재하지 않거나, query가 중복 사용되었습니다.',
            );
        }
        for (const el of queryKey) {
            if (!Object.keys(router.query).includes(el)) {
                throw new Error(
                    '현재 urlQuery 에 해당 querykey가 존재하지 않습니다.',
                );
            }
            delete urlQueries[el];
        }

        router.push({
            pathname: asPathWithoutQueries,
            query: { ...urlQueries },
        });
    };

    return {
        ...router,
        asPathWithoutQueries,
        pushQuery,
        replaceQuery,
        removeQuery,
    };
};

export default useRouterEx;
