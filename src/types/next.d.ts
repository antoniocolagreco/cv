import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export type LayoutProps<Params = {}> = { children: ReactNode; params: Params }
export type PageProps<Params = {}, SearchParams = {}> = { params: Params; searchParams: SearchParams }
export type ErrorPageProps = { error: Error; reset: () => void }
export type StaticPaths<Params = {}> = { params?: Params }

export type Layout<P extends LayoutProps = LayoutProps> = FC<P>
export type Page<P extends PageProps = PageProps> = FC<P>
export type ErrorPage = FC<ErrorPageProps>
export type AsyncPage<P extends PageProps = PageProps> = (props: P) => Promise<JSX.Element>

export type DynamicMetadata<P extends PageProps = PageProps> = (props: P) => Promise<Metadata>
