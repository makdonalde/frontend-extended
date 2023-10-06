import { classNames } from 'shared/lib'
import cls from './[FTName].module.scss'

interface <FTName>Props{
    className ?: string;
}

export const <FTName | capitalize > = (props: <FTName>Props) => {
    const { className } = props;
    return <div className={classNames(cls.<FTName>, {}, [className])}></div>
}
