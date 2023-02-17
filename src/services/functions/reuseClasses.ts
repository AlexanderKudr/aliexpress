const activeClass = <T>(state: T, className: string) => (state ? `${className}-active` : className);

export { activeClass };
