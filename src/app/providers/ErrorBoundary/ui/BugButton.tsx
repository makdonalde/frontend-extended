/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onClick = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) { throw new Error(); }
    }, [error]);
    return (
        <div className="">
            <Button onClick={onClick}>
                Test throw error
            </Button>
        </div>
    );
};
