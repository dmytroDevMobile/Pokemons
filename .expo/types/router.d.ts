/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/App`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/DetailsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/DetailsScreen/styles`; params?: Router.UnknownInputParams; } | { pathname: `/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/HomeScreen/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/App`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/DetailsScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/DetailsScreen/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeScreen/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/App${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/DetailsScreen${`?${string}` | `#${string}` | ''}` | `/DetailsScreen/styles${`?${string}` | `#${string}` | ''}` | `/HomeScreen${`?${string}` | `#${string}` | ''}` | `/HomeScreen/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/App`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/DetailsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/DetailsScreen/styles`; params?: Router.UnknownInputParams; } | { pathname: `/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/HomeScreen/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
