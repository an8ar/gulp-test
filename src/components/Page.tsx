import React from 'react';

type Props = {
  children: React.ReactNode;
  meta?: React.ReactNode;
  title: string;
};

export function Page({ children, meta, title }: Props) {
  return (
    <>
      {/* <Helmet>
        <title>{`${title} | ${APPLICATION_NAME}`}</title>
        {meta}
        <style>{'body { background-color: #F4F6F8; }'}</style>
      </Helmet> */}

      <div className="h-full">{children}</div>
    </>
  );
}
