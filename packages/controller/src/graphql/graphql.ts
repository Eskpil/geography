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
  image: Scalars['String'];
  session: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  avatar: Scalars['String'];
  discrimiator: Scalars['String'];
  points: Scalars['String'];
  plan: Scalars['Float'];
  session: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
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

export type UserResponse = {
  __typename?: 'UserResponse';
  errors: Maybe<Array<FieldError>>;
  user: Maybe<User>;
};

export type GuildInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  image: Scalars['String'];
};

export type UserInput = {
  id: Scalars['String'];
  username: Scalars['String'];
  avatar: Scalars['String'];
  discrimiator: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  guilds: Array<Guild>;
  guild: Guild;
  hello: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGuild: GuildResponse;
  changePrefix: Scalars['Boolean'];
  createUser: UserResponse;
};


export type MutationCreateGuildArgs = {
  options: GuildInput;
};


export type MutationChangePrefixArgs = {
  prefix: Scalars['String'];
};


export type MutationCreateUserArgs = {
  options: UserInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  Hey: Scalars['String'];
};

export type CreateGuildMutationVariables = Exact<{
  options: GuildInput;
}>;


export type CreateGuildMutation = (
  { __typename?: 'Mutation' }
  & { createGuild: (
    { __typename?: 'GuildResponse' }
    & { guild: Maybe<(
      { __typename?: 'Guild' }
      & Pick<Guild, 'id' | 'name' | 'image' | 'ownerId' | 'prefix' | 'session'>
    )>, errors: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'path' | 'message'>
    )>> }
  ) }
);

export type GuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type GuildsQuery = (
  { __typename?: 'Query' }
  & { guilds: Array<(
    { __typename?: 'Guild' }
    & Pick<Guild, 'id' | 'name' | 'image' | 'ownerId' | 'prefix' | 'session'>
  )> }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const CreateGuildDocument = gql`
    mutation CreateGuild($options: GuildInput!) {
  createGuild(options: $options) {
    guild {
      id
      name
      image
      ownerId
      prefix
      session
    }
    errors {
      path
      message
    }
  }
}
    `;
export const GuildsDocument = gql`
    query Guilds {
  guilds {
    id
    name
    image
    ownerId
    prefix
    session
  }
}
    `;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;