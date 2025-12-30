'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Page Nos Valeurs - Inspired by The Browser Company
 * French translation of "Notes on Roadtrips"
 */
export default function ValeursPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center py-20"
        style={{
          backgroundImage: 'url(/valeurs/small0.5x.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="mb-8"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              Notes sur les{' '}
              <span className="relative inline-block">
                <span className="text-[#FF6B6B]">ROAD TRIPS</span>
                <span
                  className="line-through absolute top-1/2 left-0 w-full"
                  style={{ textDecoration: 'line-through', textDecorationColor: '#FF6B6B', textDecorationThickness: '3px' }}
                >
                  Valeurs
                </span>
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '18px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Et ce qu'elles peuvent nous enseigner sur la créativité, l'ingéniosité,
              <br />
              et la construction de quelque chose d'entièrement nouveau. Version 01, Juin 2022.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foreword */}
      <section className="w-full py-20 bg-[#232424]">
        <div className="max-w-5xl mx-auto px-6">
        <h2
          className="mb-12"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '24px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          AVANT-PROPOS
        </h2>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '18px',
            lineHeight: '1.8',
            color: 'rgb(255, 255, 255)',
          }}
        >
          <p>
            Les valeurs d'entreprise me mettent mal à l'aise. C'est du moins ma raison pour expliquer pourquoi
            il nous a fallu si longtemps pour les coucher sur papier.
          </p>

          <p>
            C'est spécifiquement le vide et le caractère prescriptif qui me mettent mal à l'aise. L'ego de dire
            à quelqu'un d'autre comment se présenter, comment faire ce qu'il fait et le risque de cynisme si vous
            ne faites pas exactement comme il faut.
          </p>

          <p>
            Nous construisons une entreprise après tout, pas une idéologie. Qu'y a-t-il alors à demander les uns
            aux autres au-delà de "travailler dur et se traiter équitablement."
          </p>

          <p>
            Et pourtant, après deux ans de tentatives infructueuses, me voici, la main sur le cœur, convaincu que
            c'est en fait un exercice qui en vaut la peine. Parce qu'en deux ans depuis le lancement de cette entreprise,
            et aujourd'hui en regardant l'équipe que nous avons construite, il est évident qu'il y a quelque chose de
            collectivement spécial et unique chez vous tous — une certaine sensibilité ou ressemblance partagée.
          </p>

          <p>
            Et parce que je suis toujours mal à l'aise à parler de valeurs d'entreprise, nous allons le faire en
            parlant de quelque chose d'entièrement différent. Nous allons parler de Road Trips.
          </p>
        </div>
        </div>
      </section>

      {/* Value 1: HEARTFELT INTENSITY */}
      <section className="w-full py-20 bg-[#F9DA49]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            1
          </span>
          <h2
            className="mt-4 mb-6 relative inline-block"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#000000',
            }}
          >
            SE PRÉSENTER AVEC UNE INTENSITÉ SINCÈRE.
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B6B] rounded-full"></span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          <p>
            <strong>1.</strong> Mon premier road trip était un road trip en famille. Nous avons choisi de renoncer aux
            vacances d'été annuelles en famille et de descendre plutôt la Pacific Coast Highway, en partant de Vancouver
            puis le long de la côte californienne.
          </p>

          <p>
            <strong>2.</strong> Franchement, à 13 ans, la valeur du 'Road Trippin' m'échappait. C'est-à-dire, les mérites
            des autoroutes et des aires de repos par opposition à d'autres modes de transport qui vous y amènent deux fois
            plus vite.
          </p>

          <p>
            <strong>3.</strong> Relégué à la banquette arrière d'un Chevy Tahoe, j'ai passé la première étape de Vancouver
            à San Francisco endormi pour éviter le mal des transports, pour n'être réveillé sporadiquement que par les
            exclamations de mon père au-dessus de la radio, "Toujours en train de dormir !? Bon sang, je t'emmène dans les
            plus beaux endroits et tu t'endors !? Allez, bébé ! C'est ça, vivre !"
          </p>

          <p className="italic">
            J'aime penser que c'était sa 'passion pour la route' qui parlait.
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="/valeurs/df.svg"
              alt="Sunflower seeds"
              width={200}
              height={200}
              className="opacity-80"
            />
          </div>

          <p>
            <strong>4.</strong> La 'passion pour la route', comme je l'ai comprise, est une humeur ou une motivation unique
            avec laquelle on aborde le fait d'être 'sur la route' et le style spécifique qu'on apporte.
          </p>

          <p>
            <strong>5.</strong> Et c'est un sentiment qui s'applique très bien au travail que nous faisons, particulièrement
            à la façon dont nous construisons des logiciels. Mais ce qu'il y a, c'est un certain type de passion, de verve,
            d'enthousiasme — quel que soit le nom qu'on lui donne — avec lequel chacun d'entre vous est arrivé ici et qui
            vous motive à faire ce que vous faites.
          </p>

          <p>
            Pour notre usage quotidien, appelons ça <strong className="text-[#FF6B6B]">l'intensité sincère</strong>.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="my-20 py-12 border-l-4 border-[#FF6B6B] pl-8">
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '41.6px',
              color: '#000000',
            }}
          >
            Cette chose qui vous pousse tous à <br />
            obseder sur les détails que les autres <br />
            négligent, et à le faire avec entrain — <br />
            c'est <span className="italic">ça</span> l'intensité sincère.
          </p>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          <p>
            <strong>12.</strong> Je reviens sans cesse à cette citation de l'un d'entre vous — "Les gens trouvent de la joie
            dans le travail ; ils trouvent de la joie dans les détails. Il y a une passion pour la chose elle-même mais aussi
            pour l'attitude que vous adoptez envers cette chose."
          </p>

          <p>
            Et c'est vraiment ça. Puiser dans la 'passion pour la chose elle-même' — quelle que soit cette chose — c'est le
            cœur de l'intensité sincère et la partie que nous trouvons la plus digne d'être célébrée.
          </p>
        </div>
        </div>
      </section>

      {/* Value 2: START WITH WHAT COULD BE */}
      <section className="w-full py-20 bg-[#5E2320]">
        <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 flex items-center justify-center">
          <Image
            src="/valeurs/Frame-30.svg"
            alt="Car with map"
            width={500}
            height={350}
            className="opacity-80"
          />
        </div>

        <div className="mb-12">
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(255, 232, 186, 0.4)',
            }}
          >
            2
          </span>
          <h2
            className="mt-4 mb-6 relative inline-block"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#FFE8BA',
            }}
          >
            COMMENCER PAR 'QU'EST-CE QUI POURRAIT ÊTRE ?'
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFE8BA] rounded-full"></span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#FFE8BA',
          }}
        >
          <p>
            <strong>1.</strong> L'image que je veux que vous évoquiez ensuite est celle de ma mère, assise sur le siège
            passager, les bras et les doigts tendus à se débattre avec une carte 3 x 4 de la Californie centrale.
          </p>

          <p>
            Le problème est que Google Maps a une directive singulière : le chemin le plus rapide du point A au point B.
            Ce qui est très bien la plupart du temps, sauf qu'aujourd'hui nous avions un autre mandat en tête : localiser
            les meilleurs tamales au bord de la route à l'ouest des Sierras — l'Interstate 10 ne suffirait tout simplement pas.
          </p>

          <p>
            <strong>2.</strong> Nous faisions cela périodiquement : nous détourner de l'autoroute et chercher un itinéraire
            alternatif. Comme avec les tamales, généralement quand il y avait plus à gagner ou à voir (ou à manger), que
            juste une arrivée rapide à destination.
          </p>

          <p className="italic">
            Je préférais comme ça. Parce que voyager, sans au moins la possibilité de quitter la grande route, prive
            l'expérience de quelque chose de si fondamental qu'elle se transforme en quelque chose d'entièrement différent.
          </p>

          <p>
            Ça nous transforme en touristes, qui sont à jamais coincés dans le connu, le familier et le confortable.
          </p>

          <p>
            <strong>3.</strong> Comment alors — en voyageant, mais aussi dans notre travail — ne pas être des 'touristes' ?
            Comment surmonter l'inertie des mêmes autoroutes et routes interminables via Google Maps ? Savoir quand chercher
            un itinéraire alternatif, intellectuellement parlant, avec à la fois l'audace d'aller loin et large dans notre
            réflexion, et l'humilité de ramener ce que nous y trouvons.
          </p>

          <p>
            <strong>4.</strong> Pour nous, pour une fois, je pense que la réponse est en fait très prescriptive. Avant
            d'entreprendre quoi que ce soit, vous faites une pause et demandez <strong>qu'est-ce
            qui pourrait être ?</strong>
          </p>

          <p>
            Créez l'espace nécessaire pour briser ce quotidien et appuyez dessus pendant un moment. Vraiment appuyez dessus.
            Allez-y et rêvez un peu. Ou comme Toni Morrison le dit "Rêvez, puis pensez."
          </p>
        </div>

        {/* Pull Quote */}
        <div className="my-20 py-12 border-l-4 border-[#FFE8BA] pl-8">
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '41.6px',
              color: '#FFE8BA',
            }}
          >
            Ce n'est pas parce que quelque chose est, <br />
            que ça doit l'être et ça ne signifie <br />
            certainement pas que c'est juste.
          </p>
        </div>
        </div>
      </section>

      {/* Value 3: ASSUME YOU DON'T KNOW */}
      <section className="w-full py-20 bg-[#EADFDD]">
        <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 flex items-center justify-center">
          <Image
            src="/valeurs/Frame-32.svg"
            alt="Chisel illustration"
            width={300}
            height={250}
            className="opacity-80"
          />
        </div>

        <div className="mb-12">
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            3
          </span>
          <h2
            className="mt-4 mb-6 relative inline-block"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#000000',
            }}
          >
            SUPPOSER QU'ON NE SAIT PAS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B6B] rounded-full"></span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          <p>
            <strong>1.</strong> Que ce soit un ami ou un membre de la famille, nous connaissons tous cette personne.
            Celle que vous aimez et avec qui vous aimez être — la plupart du temps, mais Dieu vous garde de vous retrouver
            en voiture avec elle sur un road trip.
          </p>

          <p>
            Parce que voyager, pour une raison quelconque, fait ressortir le pire chez eux. C'est généralement une combinaison
            de 'refus de vivre avec l'ambiguïté' et de 'refus d'admettre qu'ils ont tort' qui rend leur compagnie franchement
            pas amusante.
          </p>

          <p className="italic">
            Mais c'est bien. Tous les amis ne sont pas des amis de road trip.
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="/valeurs/Frame-34.svg"
              alt="Person in car"
              width={400}
              height={300}
              className="opacity-80"
            />
          </div>

          <p>
            <strong>2.</strong> En revanche, il y a ceux qui 'prennent vie' lorsqu'ils sont 'sur la route.' Ou si nous y
            pensons dans le contexte de notre travail, qui sont à leur meilleur face au canon de la nouveauté et de l'ambiguïté,
            de grandes questions avec des réponses à variables multiples.
          </p>

          <p>
            <strong>6.</strong> Ce à quoi j'en viens, c'est un calcul qui dit 'Plus vous prenez de virages, mieux c'est,
            plus vous parlez aux gens, mieux c'est.'
          </p>

          <p>
            Mais ce n'est vraiment pas un calcul du tout, c'est une disposition et une posture. Une qui a une ténacité
            sincère. Aussi un sens de l'exaltation, particulièrement à propos de la découverte. Qui dit "il y a tellement
            à découvrir, et je serais damné si je ne découvre pas tout."
          </p>
        </div>

        {/* Pull Quote */}
        <div className="my-20 py-12 border-l-4 border-[#FF6B6B] pl-8">
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '41.6px',
              color: '#000000',
            }}
          >
            Vous valorisez et respectez leur opinion <br />
            et vous le leur faites savoir, reconnaissant <br />
            que vous n'iriez nulle part sans eux.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <Image
            src="/valeurs/bench.svg"
            alt="Bar stools"
            width={400}
            height={200}
            className="opacity-80"
          />
        </div>
        </div>
      </section>

      {/* Value 4: ON THE HOOK FOR THE TEAM */}
      <section className="w-full py-20 bg-[#4C5248]">
        <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(255, 232, 186, 0.4)',
            }}
          >
            4
          </span>
          <h2
            className="mt-4 mb-6 relative inline-block"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#FFE8BA',
            }}
          >
            VOUS ÊTES RESPONSABLE DE L'ÉQUIPE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFE8BA] rounded-full"></span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#FFE8BA',
          }}
        >
          <p>
            <strong>1.</strong> Mon père adore raconter l'histoire de quand il a conduit le même itinéraire en tant
            qu'enfant avec son père à travers le Mojave.
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="/valeurs/beds.svg"
              alt="Mattresses for sale"
              width={400}
              height={300}
              className="opacity-80"
            />
          </div>

          <p>
            <strong>3.</strong> Le point de cette histoire n'est pas de rester coincé sur l'équivalent corporatif de
            mouiller le lit au milieu du Mojave. Le point, et pourquoi j'aime tant cette histoire, c'est qu'elle touche
            à l'interconnexion d'être sur la route avec d'autres personnes. Ou dans notre cas, la proximité qui vient
            avec la construction de quelque chose de nouveau ensemble.
          </p>

          <p>
            Cela nécessite un type spécifique de propriété. Un dans lequel votre priorité numéro un est le collectif
            encore plus que votre propre travail. C'est-à-dire, rendre les autres meilleurs. Pas au détriment de votre
            propre travail, mais avec à l'esprit qu'une marée montante soulève tous les bateaux. Ce n'est pas un jeu à
            somme nulle.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="my-20 py-12 border-l-4 border-[#FFE8BA] pl-8">
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '41.6px',
              color: '#FFE8BA',
            }}
          >
            Votre impératif est de le découvrir, <br />
            puis de les mettre au volant et quand <br />
            c'est le moment, appuyer sur l'accélérateur.
          </p>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#FFE8BA',
          }}
        >
          <p>
            <strong>7.</strong> 'Responsable de l'équipe' n'est jamais censé être punitif ou impliquer un sens de blâme
            préordonné.
          </p>

          <p>
            C'est juste une autre chose, comme l'intensité sincère, qui est difficile à enseigner et qui vient plus souvent
            'intégrée'. Cet instinct proactif de tirer votre poids, de 'faire vos devoirs,' et de contribuer à tout ce qui
            doit être fait pour le succès du tout et de ceux qui vous entourent.
          </p>

          <p className="font-semibold text-lg" style={{ color: '#FFE8BA' }}>
            À la fin de la journée, le produit que nous construisons réellement ici, c'est nous-mêmes.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <Image
            src="/valeurs/Frame-37.svg"
            alt="Fishing hook"
            width={200}
            height={300}
            className="opacity-80"
          />
        </div>
        </div>
      </section>

      {/* Value 5: MAKE THEM FEEL SOMETHING */}
      <section className="w-full py-20 bg-[#DDEDEA]">
        <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            5
          </span>
          <h2
            className="mt-4 mb-6 relative inline-block"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#000000',
            }}
          >
            LEUR FAIRE RESSENTIR QUELQUE CHOSE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B6B] rounded-full"></span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          <p>
            <strong>1.</strong> Nous avons beaucoup parlé de road trips et de la façon dont les road trips se rapportent
            à toutes les choses que nous faisons ici : l'importance de se présenter avec une intensité sincère. Comment
            réduire les attentes pour que vous puissiez jeter votre filet loin et large dans les routes que vous empruntez.
          </p>

          <p>
            <strong>4.</strong> Ce qui compte le plus, c'est que vous ressentiez quelque chose. C'est ce que je pense.
          </p>

          <p className="italic">
            À combien d'occasions et dans quelle mesure avez-vous vu, vécu ou été témoin d'une chose qui vous a fait
            vous sentir incontestablement vivant.
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="/valeurs/Frame-36.svg"
              alt="Desert sunrise"
              width={500}
              height={300}
              className="opacity-80"
            />
          </div>

          <p>
            <strong>6.</strong> Quand nous construisons des logiciels, c'est une opportunité de faire ressentir quelque
            chose aux gens.
          </p>

          <p>
            Ça n'a pas besoin d'être quelque chose de majeur. Je ne pense pas que nous concurrencerons jamais les levers
            de soleil dans le désert. Juste que nous pourrions les faire sourire, rire, voir ou réaliser quelque chose
            qu'ils n'avaient pas vu avant.
          </p>

          <p>
            Tant d'entre vous font déjà cela, souvent dans les détails. Vous laissez vos empreintes digitales, pour
            qu'ils sachent que c'était fait par une autre personne et que cette personne s'en souciait.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="my-20 py-12 border-l-4 border-[#FF6B6B] pl-8">
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '41.6px',
              color: '#000000',
            }}
          >
            Ça peut être amusant. Ça peut être ludique. <br />
            À la fois pour ce que c'est et ce que ça <br />
            vous permet de faire. Tellement que nous <br />
            pouvons nous sentir chez nous dedans.
          </p>
        </div>

        <div
          className="space-y-6 mb-20"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          <p>
            <strong>9.</strong> D'une certaine manière, <em>leur faire ressentir quelque chose</em> se prend moins au
            sérieux que la plupart... nous essayons juste de rendre tout ça un peu plus amusant.
          </p>

          <p>
            D'autres façons, cela prend le travail que nous faisons beaucoup plus au sérieux. Cela exige que le travail
            que nous faisons soit une expression de nous-mêmes. C'est beaucoup à donner.
          </p>

          <p>
            Mais, au cas où vous oublieriez tout le reste. Ou au cas où nous nous serions trompés, faisons au moins une
            chose correctement. Au moins pour le moment et pendant que nous le pouvons, <strong>faisons-leur ressentir
            quelque chose...</strong> C'est tout ce dont tout le monde se souvient de toute façon.
          </p>
        </div>

        <div className="my-16 flex justify-center">
          <Image
            src="/valeurs/brain.svg"
            alt="Heart and brain holding hands"
            width={400}
            height={300}
            className="opacity-80"
          />
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="mb-4"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '18px',
              lineHeight: '1.6',
            }}
          >
            TANSE est un groupe d'humains sympathiques travaillant à <br />
            rendre Internet plus agréable à utiliser.
          </p>
          <Link
            href="/geo"
            className="text-[#658AFF] hover:underline"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '16px',
            }}
          >
            En savoir plus sur ce sur quoi nous travaillons →
          </Link>
        </div>
      </footer>
    </main>
  );
}
