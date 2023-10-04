import { memo } from 'react';
import { classNames } from 'shared/lib';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return <div className={classNames('', {}, [className])}></div>;
};
export default memo(ArticlesPage);
