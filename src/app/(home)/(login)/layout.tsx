import MainLogin from '@/app/features/login/main-login';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <MainLogin>{children}</MainLogin>;
}
