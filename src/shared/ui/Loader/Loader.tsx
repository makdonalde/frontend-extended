import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls['lds-ring'], {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
