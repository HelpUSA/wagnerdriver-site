import type { Locale } from '@/i18n/config';
import CompanyPage from '@/components/company/CompanyPages';

export default function Page({ params }: { params: { locale: Locale } }) {
  return <CompanyPage slug="how-it-works" locale={params.locale} />;
}
