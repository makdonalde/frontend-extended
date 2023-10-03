import { classNames } from 'shared/lib'
import cls from './[FTName].module.scss'

interface <FTName>Props{
    className ?: string;
}

export const <FTName | capitalize > = ({ className }: <FTName>Props) => {
    return <div className={classNames(cls.<FTName>, {}, [className])}></div>
}
