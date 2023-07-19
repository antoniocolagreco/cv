import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export type DefaultLayoutParams = { children?: ReactNode; params?: any }
export type DefaultPageParams = { params?: any; searchParams?: any }

export type DefaultLayoutProps<Params = DefaultLayoutParams> = DefaultLayoutParams
export type DefaultPageProps<Params = DefaultPageParams, SearchParams = {}> = DefaultPageParams
export type DefaultErrorPageProps = { error: Error; reset: () => void }

export type Layout<P extends DefaultLayoutProps = DefaultLayoutProps> = FC<P>
export type NextPage<P extends DefaultPageProps = DefaultPageProps> = FC<P>
export type ErrorPage = FC<DefaultErrorPageProps>
export type AsyncPage<P extends DefaultPageProps = DefaultPageProps> = (props: P) => Promise<JSX.Element>

export type MetadataFunction<P extends DefaultPageProps = DefaultPageProps> = (props: P) => Metadata
export type AsyncMetadataFunction<P extends DefaultPageProps = DefaultPageProps> = (props: P) => Promise<Metadata>

