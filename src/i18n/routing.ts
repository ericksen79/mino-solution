import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed' // Default locale 'es' will not have a prefix in URL.
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
