import Image from "next/image";

import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/user-avatar-example.png";
import iconCheckImg from "../assets/icon-check.svg";

export default function Home() {
	return (
		<div className="max-w-[450px] px-4 py-10 h-full mx-auto grid grid-cols items-center gap-28 md:px-0 xl:grid-cols-2 md:max-w-[600px] xl:max-w-[1124px] xs:h-screen">
			<main>
				<Image src={logoImg} alt="NLW Copa" />

				<h1 className="mt-14 text-white text-3xl font-bold leading-tight md:text-5xl">
					Crie seu próprio bolão da copa e compartilhe entre amigos!
				</h1>

				<div className="mt-10 flex items-center gap-2">
					<Image src={usersAvatarExampleImg} alt="" />

					<strong className="text-gray-100 text-base md:text-xl">
						<span className="text-ignite-500">+12.592</span> pessoas já estão
						usando
					</strong>
				</div>

				<form className="mt-10 flex flex-col gap-2 sm:flex-row">
					<input
						className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
						type="text"
						placeholder="Qual nome do seu bolão?"
						required
					/>

					<button
						className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
						type="submit"
					>
						Criar meu bolão
					</button>
				</form>

				<p className="mt-4 text-sm text-gray-300 leading-relaxed">
					Após criar seu bolão, você receberá um código único que poderá usar
					para convidar outras pessoas 🚀
				</p>

				<div className="mt-10 pt-10 border-t border-gray-600 flex justify-evenly text-gray-100 text-center xs:text-start xs:justify-between">
					<div className="flex flex-col items-center gap-3 xs:gap-6 xs:flex-row">
						<Image src={iconCheckImg} alt="" className="w-8 xs:w-10" />
						<div className="flex flex-col">
							<span className="font-bold text-sm xs:text-2xl">+2.034</span>
							<span>Bolões criados</span>
						</div>
					</div>

					<div className="w-px h-24 bg-gray-600 xs:h-14"></div>

					<div className="flex flex-col items-center gap-3 xs:gap-6 xs:flex-row">
						<Image src={iconCheckImg} alt="" className="w-8 xs:w-10" />
						<div className="flex flex-col">
							<span className="font-bold text-sm xs:text-2xl">+192.847</span>
							<span>Palpites enviados</span>
						</div>
					</div>
				</div>
			</main>

			<Image
				src={appPreviewImg}
				alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
				quality={100}
				className="hidden xl:block"
			/>
		</div>
	);
}
