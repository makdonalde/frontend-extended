import { classNames } from 'shared/lib';
import { Typography } from 'shared/ui';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = (({ className, block }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            {block.title && <Typography title={block?.title} />}
            {block.paragraphs
                .map((paragraph) => <Typography className={cls.paragraph} key={paragraph} text={paragraph} />)}
        </div>
    );
});
