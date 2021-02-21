import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Guild = {
  __typename?: 'Guild';
  id: Scalars['ID'];
  name: Scalars['String'];
  prefix: Scalars['String'];
  ownerId: Scalars['String'];
  plan: Scalars['Float'];
  image: Scalars['String'];
  session: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type GuildResponse = {
  __typename?: 'GuildResponse';
  errors: Maybe<Array<FieldError>>;
  guild: Maybe<Guild>;
};

export type GuildInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  image: Scalars['String'];
  session: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGuild: GuildResponse;
};


export type MutationCreateGuildArgs = {
  options: GuildInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  Hey: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;