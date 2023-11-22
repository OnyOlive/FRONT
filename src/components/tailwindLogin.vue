<template>
	<div class="ocean">
			<div class="wave"></div>
			<div class="wave"></div></div>
			<!-- component -->
			<div class="min-h-screen bg-[#015871] py-6 flex flex-col justify-center sm:py-12 z-10">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-900 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-[30deg] sm:rounded-3xl">
		</div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-amber-700 to-yellow-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-[-15deg] sm:rounded-3xl">
		</div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:rotate-[15deg] sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold mx-20">Connexion à G.P</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mot de passe</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Soumettre</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

			
</template>

<style>


html,
body {
  height: 100%;
}
body {
  /* background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  ); */
  background-color: #015871;
  overflow: hidden;
}

.ocean {
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #33bbff;
}

.wave {
  /* background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) */
  background: url('../../assets/wave.svg')
    repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 700s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 700s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>