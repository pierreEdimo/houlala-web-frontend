import {NextPage} from "next";
import {NestedLayout} from "../../components/layout/mainlayout/nested.layout";
import BackButton from "../../components/back-button/back.button";
import ReactMarkdown from "react-markdown";

const Conditions: NextPage = () => {
    return (
        <NestedLayout>
            <BackButton title={"Conditions d'utilisation"}/>
            <div style={{height: "10px"}}></div>
            <ReactMarkdown>
                {Condition}
            </ReactMarkdown>
        </NestedLayout>
    )
}

export default Conditions;

const Condition = " Dernière mise à jour : 2023-02-05\n" +
    "\n" +
    "1. Introduction\n" +
    "\n" +
    "Bienvenue chez houlala sarl (\"Société\", \"nous\", \"notre\", \"nos\") !\n" +
    "\n" +
    "Les présentes conditions de service (\" Conditions \", \" Conditions de service \") régissent votre\n" +
    "utilisation de notre site Internet situé à l'adresse https://shop.houlala.store/ (ensemble ou\n" +
    "individuellement \" Service \") exploité par houlala sarl.\n" +
    "\n" +
    "Notre Politique de confidentialité régit également votre utilisation de notre Service et explique\n" +
    "comment nous recueillons, protégeons et divulguons les informations qui résultent de votre utilisation\n" +
    "de nos pages Web.\n" +
    "\n" +
    "Votre accord avec nous comprend les présentes Conditions et notre Politique de confidentialité (les \"\n" +
    "Accords \"). Vous reconnaissez avoir lu et compris les Accords, et acceptez d'être lié par eux.\n" +
    "\n" +
    "Si vous n'êtes pas d'accord avec les Accords (ou si vous ne pouvez pas vous y conformer), vous ne pouvez\n" +
    "pas utiliser le Service, mais vous devez nous le faire savoir en nous envoyant un e-mail à\n" +
    "pierredimo@live.com afin que nous puissions essayer de trouver une solution. Ces Conditions s'appliquent\n" +
    "à tous les visiteurs, utilisateurs et autres personnes qui souhaitent accéder au Service ou l'utiliser." +
    "\n" +
    "\n" +
    "2. Communications\n" +
    "\n" +
    "En utilisant notre service, vous acceptez de vous abonner aux bulletins d'information, au matériel de marketing ou de promotion et aux autres informations que nous pouvons envoyer. Toutefois, vous pouvez choisir de ne pas recevoir tout ou partie de ces communications en suivant le lien de désabonnement ou en envoyant un courriel à pierredimo@live.com.\n" +
    "\n" +
    "3. Achats\n" +
    "\n" +
    "Si vous souhaitez acheter un produit ou un service disponible par l'intermédiaire du Service (\"Achat\"), il peut vous être demandé de fournir certaines informations relatives à votre Achat, y compris, mais sans s'y limiter, votre numéro de carte de crédit ou de débit, la date d'expiration de votre carte, votre adresse de facturation et vos informations d'expédition.\n" +
    "\n" +
    "Vous déclarez et garantissez que : (i) vous avez le droit légal d'utiliser toute(s) carte(s) ou autre(s) méthode(s) de paiement en rapport avec tout achat ; et que (ii) les informations que vous nous fournissez sont vraies, correctes et complètes.\n" +
    "\n" +
    "Nous pouvons faire appel à des services tiers pour faciliter le paiement et la réalisation des achats. En soumettant vos informations, vous nous donnez le droit de fournir ces informations à ces tiers, conformément à notre politique de confidentialité.\n" +
    "\n" +
    "Nous nous réservons le droit de refuser ou d'annuler votre commande à tout moment pour des raisons incluant mais non limitées à : la disponibilité du produit ou du service, des erreurs dans la description ou le prix du produit ou du service, une erreur dans votre commande ou d'autres raisons.\n" +
    "\n" +
    "Nous nous réservons le droit de refuser ou d'annuler votre commande si une fraude ou une transaction non autorisée ou illégale est suspectée." +
    "\n" +
    "\n" +
    "4. Concours, sweepstakes et promotions\n" +
    "\n" +
    "Tous les concours, loteries ou autres promotions (collectivement, \" Promotions \") mis à disposition par le biais du Service peuvent être régis " +
    "par des règles distinctes des présentes Conditions d'utilisation. Si vous participez à une quelconque Promotion, veuillez consulter les règles" +
    " applicables ainsi que notre Politique de confidentialité. Si les règles d'une promotion entrent en conflit avec les présentes conditions de" +
    " service, les règles de la promotion s'appliqueront." +
    "\n" +
    "\n" +
    "5. Remboursements\n" +
    "\n" +
    "Nous remboursons les contrats dans les 30 jours suivant l'achat initial du contrat.\n" +
    "\n" +
    "6. Contenu\n" +
    "\n" +
    "Le contenu trouvé sur ou à travers ce Service est la propriété de houlala sarl ou utilisé avec permission. Vous ne pouvez pas distribuer, modifier, transmettre, réutiliser, télécharger, rediffuser, copier ou utiliser ledit Contenu, en totalité ou en partie, à des fins commerciales ou pour votre bénéfice personnel, sans notre autorisation écrite préalable.\n" +
    "\n" +
    "7. Utilisations interdites\n" +
    "\n" +
    "Vous pouvez utiliser le Service uniquement à des fins légales et conformément aux Conditions. Vous acceptez de ne pas utiliser le Service :\n" +
    "\n" +
    "\n" +
    "0.1. D'une manière qui viole toute loi ou réglementation nationale ou internationale applicable.\n" +
    "\n" +
    "\n" +
    "0.2. Dans le but d'exploiter, de nuire ou de tenter d'exploiter ou de nuire à des mineurs de quelque manière que ce soit en les exposant à un contenu inapproprié ou autre.\n" +
    "\n" +
    "\n" +
    "0.3. Pour transmettre, ou faire envoyer, tout matériel publicitaire ou promotionnel, y compris tout \"junk mail\", \"chaîne de lettres\", \"spam\" ou toute autre sollicitation similaire.\n" +
    "\n" +
    "\n" +
    "0.4. Usurper ou tenter d'usurper l'identité de la Société, d'un employé de la Société, d'un autre utilisateur ou de toute autre personne ou entité.\n" +
    "\n" +
    "\n" +
    "0.5. D'une manière qui porte atteinte aux droits d'autrui, ou d'une manière qui soit illégale, menaçante, frauduleuse ou nuisible, ou en relation avec un objectif ou une activité illégale, frauduleuse ou nuisible.\n" +
    "\n" +
    "\n" +
    "0.6. S'engager dans toute autre conduite qui restreint ou empêche l'utilisation ou la jouissance du Service par quiconque, ou qui, comme nous le déterminons, peut nuire ou offenser la Société ou les utilisateurs du Service ou les exposer à la responsabilité.\n" +
    "\n" +
    "\n" +
    "En outre, vous acceptez de ne pas :\n" +
    "\n" +
    "\n" +
    "0.1. Utiliser le service d'une manière qui pourrait désactiver, surcharger, endommager ou altérer le service ou interférer avec l'utilisation du service par une autre partie, y compris sa capacité à s'engager dans des activités en temps réel par le biais du service.\n" +
    "\n" +
    "\n" +
    "0.2. Utiliser un robot, une araignée ou tout autre dispositif, processus ou moyen automatique pour accéder au Service à quelque fin que ce soit, y compris pour surveiller ou copier tout élément du Service.\n" +
    "\n" +
    "\n" +
    "0.3. Utiliser tout processus manuel pour surveiller ou copier tout élément du Service ou à toute autre fin non autorisée sans notre consentement écrit préalable.\n" +
    "\n" +
    "\n" +
    "0.4. Utiliser tout dispositif, logiciel ou routine qui interfère avec le bon fonctionnement du Service.\n" +
    "\n" +
    "\n" +
    "0.5. Introduire tout virus, cheval de Troie, ver, bombe logique ou autre matériel malveillant ou technologiquement nuisible.\n" +
    "\n" +
    "\n" +
    "0.6. Tenter d'obtenir un accès non autorisé à, d'interférer avec, d'endommager ou de perturber toute partie du Service, le serveur sur lequel le Service est stocké, ou tout serveur, ordinateur ou base de données connecté au Service.\n" +
    "\n" +
    "\n" +
    "0.7. Attaquer le Service via une attaque par déni de service ou une attaque par déni de service distribué.\n" +
    "\n" +
    "\n" +
    "0.8. Prendre toute mesure susceptible d'endommager ou de falsifier le classement de la Société.\n" +
    "\n" +
    "\n" +
    "0.9. Tenter de toute autre manière d'interférer avec le bon fonctionnement du Service" +
    "\n" +
    "\n" +
    "8. Analyses\n" +
    "\n" +
    "Nous pouvons faire appel à des fournisseurs de services tiers pour surveiller et analyser l'utilisation de notre service.\n" +
    "\n" +
    "9. Pas d'utilisation par des mineurs\n" +
    "\n" +
    "Le Service est destiné uniquement à l'accès et à l'utilisation par des personnes âgées d'au moins dix-huit (18) ans. En accédant au Service " +
    "ou en l'utilisant, vous garantissez et déclarez que vous avez au moins dix-huit (18) ans et que vous avez la pleine autorité, le droit et la capacité de conclure le présent accord et de respecter toutes les conditions générales des Conditions. Si vous n'avez pas au moins dix-huit (18) ans, l'accès et l'utilisation du Service vous sont interdits.\n" +
    "\n" +
    "10. Comptes\n" +
    "\n" +
    "Lorsque vous créez un compte chez nous, vous garantissez que vous avez plus de 18 ans et que les" +
    " informations que vous nous fournissez sont exactes, complètes et à jour à tout moment. Des informations " +
    "inexactes, incomplètes ou obsolètes peuvent entraîner la résiliation immédiate de votre compte sur le Service.\n" +
    "\n" +
    "Vous êtes responsable du maintien de la confidentialité de votre compte et de votre mot de passe, " +
    "y compris, mais sans s'y limiter, de la restriction de l'accès à votre ordinateur et/ou à votre compte. Vous acceptez d'être responsable de toutes les activités ou actions qui se produisent sous votre compte et/ou votre mot de passe, que votre mot de passe soit avec notre Service ou un service tiers. Vous devez nous informer immédiatement dès que vous avez connaissance d'une violation de la sécurité ou d'une utilisation non autorisée de votre compte.\n" +
    "\n" +
    "Vous ne pouvez pas utiliser comme nom d'utilisateur le nom d'une autre personne ou entité " +
    "ou qui n'est pas légalement disponible pour l'utilisation, un nom ou une marque déposée qui est" +
    " soumis à des droits d'une autre personne ou entité que vous, sans autorisation appropriée. " +
    "Vous ne pouvez pas utiliser comme nom d'utilisateur un nom qui est offensant, vulgaire ou obscène.\n" +
    "\n" +
    "Nous nous réservons le droit de refuser le service, de fermer des comptes, de supprimer " +
    "ou de modifier le contenu, ou d'annuler des commandes à notre seule discrétion." +
    "\n" +
    "\n" +
    "11. Propriété intellectuelle\n" +
    "\n" +
    "Le Service et son contenu original (à l'exclusion du Contenu fourni par les utilisateurs), ses caractéristiques et ses fonctionnalités " +
    "sont et resteront la propriété exclusive de houlala sarl et de ses concédants de licence. Le Service est protégé par " +
    "le droit d'auteur, le droit des marques et d'autres lois en vigueur dans les pays étrangers. Nos marques ne " +
    "peuvent être utilisées en relation avec un produit ou un service sans le consentement écrit préalable de houlala sarl.\n" +
    "\n" +
    "12. Politique en matière de droits d'auteur\n" +
    "\n" +
    "Nous respectons les droits de propriété intellectuelle d'autrui. Notre politique est de répondre " +
    "à toute réclamation selon laquelle le Contenu publié sur le Service enfreint les droits d'auteur ou autres " +
    "droits de propriété intellectuelle (\"Infraction\") de toute personne ou entité.\n" +
    "\n" +
    "Si vous êtes propriétaire d'un droit d'auteur, ou autorisé au nom de l'un d'entre eux, et que vous pensez " +
    "que l'œuvre protégée par le droit d'auteur a été copiée d'une manière qui constitue une violation du " +
    "droit d'auteur, veuillez soumettre votre réclamation par e-mail à pierredimo@live.com, avec la ligne d'objet : " +
    "\"Violation des droits d'auteur\" et inclure dans votre réclamation une description détaillée de la violation " +
    "présumée, comme indiqué ci-dessous, à la rubrique \"Avis DMCA et procédure de réclamation pour violation des droits d'auteur\".\n" +
    "\n" +
    "Vous pouvez être tenu responsable des dommages (y compris les coûts et les frais d'avocat) en cas " +
    "de fausse déclaration ou de réclamation de mauvaise foi concernant la violation de vos droits d'auteur par " +
    "tout contenu trouvé sur et/ou via le Service." +
    "\n" +
    "\n" +
    "13. DMCA Notice and Procedure for Copyright Infringement Claims\n" +
    "\n" +
    "You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):\n" +
    "\n" +
    "0.1. an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;\n" +
    "\n" +
    "0.2. a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;\n" +
    "\n" +
    "0.3. identification of the URL or other specific location on Service where the material that you claim is infringing is located;\n" +
    "\n" +
    "0.4. your address, telephone number, and email address;\n" +
    "\n" +
    "0.5. a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;\n" +
    "\n" +
    "0.6. a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.\n" +
    "\n" +
    "You can contact our Copyright Agent via email at pierredimo@live.com." +
    "\n" +
    "\n" +
    "14. Signalement des erreurs et commentaires\n" +
    "\n" +
    "Vous pouvez nous fournir, soit directement à l'adresse pierredimo@live.com, soit par l'intermédiaire de sites et d'outils tiers, des informations et des " +
    "commentaires concernant des erreurs, des suggestions d'amélioration, des idées, des problèmes, des plaintes et d'autres questions liées à " +
    "notre service (\"commentaires\"). Vous reconnaissez et acceptez que : (i) vous ne conserverez, n'acquerrez ni ne ferez valoir aucun droit de " +
    "propriété intellectuelle ou autre droit, titre ou intérêt sur les Rétroactions ; (ii) la Société peut avoir des idées de développement" +
    " similaires aux Rétroactions ; (iii) les Rétroactions ne contiennent pas d'informations confidentielles ou exclusives de votre part ou " +
    "de celle d'un tiers ; et (iv) la Société n'est soumise à aucune obligation de confidentialité en ce qui concerne les Rétroactions. " +
    "Dans le cas où le transfert de la propriété du Feedback n'est pas possible en raison des lois impératives applicables, vous accordez " +
    "à la Société et à ses sociétés affiliées un droit exclusif, transférable, irrévocable, gratuit, pouvant faire l'objet d'une sous-licence," +
    " illimité et perpétuel d'utiliser (y compris copier, modifier, créer des œuvres dérivées, publier, distribuer et commercialiser) le Feedback " +
    "de quelque manière et à quelque fin que ce soit.\n" +
    "\n" +
    "15. Liens vers d'autres sites Web\n" +
    "\n" +
    "Notre Service peut contenir des liens vers des sites Web ou des services tiers qui ne sont pas détenus ou contrôlés par houlala sarl.\n" +
    "\n" +
    "Houlala Sarl n'a aucun contrôle sur, et n'assume aucune responsabilité quant au contenu, aux politiques de confidentialité ou " +
    "aux pratiques de tout site ou service tiers. Nous ne garantissons pas les offres de ces entités/individus ou de leurs sites web.\n" +
    "\n" +
    "Par exemple, les conditions d'utilisation décrites ont été créées à l'aide de PolicyMaker.io, une application web gratuite " +
    "permettant de générer des documents juridiques de haute qualité. Le générateur de conditions d'utilisation de PolicyMaker " +
    "est un outil gratuit facile à utiliser pour créer un excellent modèle standard de conditions d'utilisation pour un site web, " +
    "un blog, une boutique de commerce électronique ou une application.\n" +
    "\n" +
    "VOUS RECONNAISSEZ ET ACCEPTEZ QUE LA SOCIÉTÉ NE SOIT PAS RESPONSABLE, DIRECTEMENT OU INDIRECTEMENT, DE TOUT DOMMAGE OU " +
    "PERTE CAUSÉ OU SUPPOSÉ ÊTRE CAUSÉ PAR OU EN RELATION AVEC L'UTILISATION OU LA CONFIANCE DANS UN TEL CONTENU, BIENS OU" +
    " SERVICES DISPONIBLES SUR OU VIA LES SITES WEB OU SERVICES DE TIERS.\n" +
    "\n" +
    "NOUS VOUS CONSEILLONS VIVEMENT DE LIRE LES CONDITIONS DE SERVICE ET LES POLITIQUES DE CONFIDENTIALITÉ DE TOUT SITE WEB " +
    "OU SERVICE TIERS QUE VOUS VISITEZ." +
    "\n" +
    "\n" +
    "16. Exclusion de garantie\n" +
    "\n" +
    "CES SERVICES SONT FOURNIS PAR LA SOCIÉTÉ SUR UNE BASE \"TELLE QUELLE\" ET \"TELLE QUE DISPONIBLE\". LA SOCIETE NE" +
    " FAIT AUCUNE REPRESENTATION OU GARANTIE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE, QUANT AU FONCTIONNEMENT " +
    "DE SES SERVICES, OU AUX INFORMATIONS, CONTENUS OU MATERIAUX QUI Y SONT INCLUS. VOUS CONVENEZ EXPRESSÉMENT QUE VOTRE " +
    "UTILISATION DE CES SERVICES, DE LEUR CONTENU ET DE TOUT SERVICE OU ARTICLE OBTENU AUPRÈS DE NOUS EST À VOS RISQUES ET PÉRILS.\n" +
    "\n" +
    "NI LA SOCIETE NI AUCUNE PERSONNE ASSOCIEE A LA SOCIETE N'OFFRE DE GARANTIE OU DE REPRESENTATION CONCERNANT " +
    "L'EXHAUSTIVITE, LA SECURITE, LA FIABILITE, LA QUALITE, L'EXACTITUDE OU LA DISPONIBILITE DES SERVICES. SANS LIMITER" +
    " CE QUI PRÉCÈDE, NI LA SOCIÉTÉ NI AUCUNE PERSONNE ASSOCIÉE À LA SOCIÉTÉ NE DÉCLARE OU NE GARANTIT QUE LES SERVICES, " +
    "LEUR CONTENU OU TOUT SERVICE OU ÉLÉMENT OBTENU PAR LE BIAIS DES SERVICES SERONT EXACTS, FIABLES, SANS ERREUR OU ININTERROMPUS, " +
    "QUE LES DÉFAUTS SERONT CORRIGÉS, QUE LES SERVICES OU LE SERVEUR QUI LES REND DISPONIBLES SONT EXEMPTS DE VIRUS OU D'AUTRES COMPOSANTS" +
    " NUISIBLES OU QUE LES SERVICES OU TOUT SERVICE OU ÉLÉMENT OBTENU PAR LE BIAIS DES SERVICES RÉPONDRONT AUTREMENT À VOS BESOINS OU ATTENTES.\n" +
    "\n" +
    "LA SOCIÉTÉ DÉCLINE PAR LA PRÉSENTE TOUTE GARANTIE DE QUELQUE NATURE QUE CE SOIT, QU'ELLE SOIT EXPRESSE OU IMPLICITE," +
    " STATUTAIRE OU AUTRE, Y COMPRIS, MAIS SANS S'Y LIMITER, TOUTE GARANTIE DE QUALITÉ MARCHANDE, D'ABSENCE DE CONTREFAÇON " +
    "ET D'ADÉQUATION À UN USAGE PARTICULIER.\n" +
    "\n" +
    "CE QUI PRÉCÈDE N'AFFECTE PAS LES GARANTIES QUI NE PEUVENT ÊTRE EXCLUES OU LIMITÉES EN VERTU DE LA LOI APPLICABLE." +
    "\n" +
    "\n" +
    "17. Limitation de la responsabilité\n" +
    "\n" +
    "SAUF SI LA LOI L'INTERDIT, VOUS NOUS TIENDREZ, AINSI QUE NOS DIRIGEANTS, ADMINISTRATEURS, EMPLOYÉS ET AGENTS, À L'ÉCART " +
    "DE TOUT DOMMAGE INDIRECT, PUNITIF, SPÉCIAL, ACCESSOIRE OU CONSÉCUTIF, QUELLE QU'EN SOIT L'ORIGINE (Y COMPRIS LES HONORAIRES " +
    "D'AVOCAT ET TOUS LES COÛTS ET FRAIS CONNEXES DE LITIGE ET D'ARBITRAGE, OU DE PROCÈS OU D'APPEL, LE CAS ÉCHÉANT, QU'UN LITIGE OU " +
    "UN ARBITRAGE SOIT ENGAGÉ OU NON), QUE CE SOIT DANS LE CADRE D'UNE ACTION CONTRACTUELLE, DE NÉGLIGENCE OU D'UNE AUTRE ACTION DÉLICTUELLE, " +
    "OU DÉCOULANT DE OU EN RELATION AVEC LE PRÉSENT CONTRAT, Y COMPRIS, MAIS SANS S'Y LIMITER, TOUTE RÉCLAMATION POUR DOMMAGES CORPORELS " +
    "OU MATÉRIELS, DÉCOULANT DU PRÉSENT CONTRAT ET DE TOUTE VIOLATION PAR VOUS DE TOUTE LOI, STATUT, RÈGLE OU RÉGLEMENTATION FÉDÉRALE, " +
    "ÉTATIQUE OU LOCALE, MÊME SI LA SOCIÉTÉ A ÉTÉ PRÉALABLEMENT INFORMÉE DE LA POSSIBILITÉ DE TELS DOMMAGES. SAUF SI LA LOI L'INTERDIT," +
    " S'IL Y A UNE RESPONSABILITÉ DE LA PART DE LA SOCIÉTÉ, ELLE SERA LIMITÉE AU MONTANT PAYÉ POUR LES PRODUITS ET/OU SERVICES, " +
    "ET EN AUCUN CAS IL N'Y AURA DE DOMMAGES CONSÉCUTIFS OU PUNITIFS. CERTAINS ÉTATS N'AUTORISENT PAS L'EXCLUSION OU LA LIMITATION " +
    "DES DOMMAGES PUNITIFS, ACCIDENTELS OU CONSÉCUTIFS, DE SORTE QUE LA LIMITATION OU L'EXCLUSION PRÉCÉDENTE PEUT NE PAS S'APPLIQUER À VOUS." +
    "\n" +
    "\n" +
    "18. Résiliation\n" +
    "\n" +
    "Nous pouvons résilier ou suspendre votre compte et interdire l'accès au Service immédiatement, sans préavis ni responsabilité, " +
    "à notre seule discrétion, pour quelque raison que ce soit et sans limitation, y compris mais non limité à une violation des Conditions.\n" +
    "\n" +
    "Si vous souhaitez résilier votre compte, vous pouvez simplement cesser d'utiliser le Service.\n" +
    "\n" +
    "Toutes les dispositions des Conditions qui, par leur nature, devraient survivre à la résiliation, survivront à la résiliation, y compris, mais sans s'y limiter, " +
    "les dispositions relatives à la propriété, l'exonération de garantie, l'indemnisation et les limitations de responsabilité.\n" +
    "\n" +
    "19. Loi applicable\n" +
    "\n" +
    "Les présentes Conditions sont régies et interprétées conformément aux lois du Cameroun, lesquelles s'appliquent à l'accord sans tenir compte de ses dispositions en matière de conflit de lois.\n" +
    "\n" +
    "Le fait que nous ne fassions pas valoir un droit ou une disposition des présentes Conditions ne sera pas considéré comme une renonciation à ces droits. Si une disposition des présentes Conditions est jugée invalide " +
    "ou inapplicable par un tribunal, les autres dispositions des présentes Conditions resteront en vigueur." +
    " Les présentes Conditions constituent l'intégralité de l'accord entre nous concernant notre Service et annulent et remplacent tout accord antérieur que nous aurions pu avoir entre nous concernant le Service.\n" +
    "\n" +
    "20. Modifications du service\n" +
    "\n" +
    "Nous nous réservons le droit de retirer ou de modifier notre Service, et tout service ou matériel que nous fournissons via le Service, à notre seule discrétion et sans préavis. Nous ne serons pas responsables si," +
    " pour une raison quelconque, tout ou partie du Service est indisponible à tout moment ou pour toute période. De temps à autre, nous pouvons restreindre l'accès à certaines parties du Service, ou à l'ensemble du Service," +
    " aux utilisateurs, y compris les utilisateurs enregistrés." +
    "\n" +
    "\n" +
    "21. Modifications des conditions\n" +
    "\n" +
    "Nous pouvons modifier les conditions à tout moment en publiant les conditions modifiées sur ce site. Il est de votre responsabilité de revoir ces conditions périodiquement.\n" +
    "\n" +
    "Votre utilisation continue de la plate-forme après l'affichage des conditions révisées signifie que vous acceptez et consentez aux changements. Il est attendu de vous que vous vérifiiez fréquemment cette page afin d'être informé de toute modification, car elle vous engage.\n" +
    "\n" +
    "En continuant à accéder à notre service ou à l'utiliser après l'entrée en vigueur des révisions, vous acceptez d'être lié par les conditions révisées. Si vous n'acceptez pas les nouvelles conditions, vous n'êtes plus autorisé à utiliser le service.\n" +
    "\n" +
    "22. Renonciation et divisibilité\n" +
    "\n" +
    "Aucune renonciation par la Société à un terme ou une condition énoncée dans les Conditions ne sera considérée comme une renonciation supplémentaire ou continue de ce terme ou de cette condition ou une renonciation à tout autre terme ou condition, et tout manquement de la Société à faire valoir un droit ou une disposition en vertu des Conditions ne constituera pas une renonciation à ce droit ou à cette disposition.\n" +
    "\n" +
    "Si une disposition des Conditions est jugée par une cour ou un autre tribunal de la juridiction compétente comme étant invalide, illégale ou inapplicable pour quelque raison que ce soit, cette disposition sera éliminée ou limitée dans la mesure minimale de sorte que les autres dispositions des Conditions continueront à être en vigueur et à produire leurs effets.\n" +
    "\n" +
    "23. Reconnaissance\n" +
    "\n" +
    "EN UTILISANT LE SERVICE OU D'AUTRES SERVICES FOURNIS PAR NOUS, VOUS RECONNAISSEZ AVOIR LU CES CONDITIONS DE SERVICE ET ACCEPTEZ D'ÊTRE LIÉ PAR ELLES.\n" +
    "\n" +
    "24. Contact\n" +
    "\n" +
    "Veuillez envoyer vos réactions, commentaires, demandes d'assistance technique par e-mail : pierredimo@live.com.";