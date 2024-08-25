import Link, { LinkProps } from 'next/link';

interface HeaderLinkProps extends LinkProps {
    children: JSX.Element | string,
}

export const HeaderLink = (props: HeaderLinkProps) => {
	return <Link {...props} />;
};
