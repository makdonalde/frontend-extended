import { memo } from 'react';
import { classNames } from 'shared/lib';
import { Typography, TypographyAlign } from 'shared/ui';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames('', {}, [className])}>

            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <Typography text={block.title} align={TypographyAlign.CENTER} />
            )}
        </div>
    );
});
