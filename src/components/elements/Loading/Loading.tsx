import styles from './Loading.module.css';

/*
    size -> 해당 width/ height(rem) default 7.5
    circlesize -> 해당 내부 원 사이즈(px) default 16
    color -> 해당 돌아가는 원의 컬러 default #f3f3f3
*/

export interface LoadingProps {
    color?: string;
    circleSize?: number;
    size?: number;
}

const Loading = ({ color, circleSize, size }: LoadingProps) => {
    return (
        <div
            className={styles.loading}
            style={{
                '--color': color,
                '--circle-size': circleSize,
                '--size': size,
            }}
        />
    );
};

export default Loading;
