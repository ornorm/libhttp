/** @babel */
import * as char from 'hjs-core/lib/char';
import { ByteArrayInputStream } from 'hjs-io/lib/input';
import { StringReader } from 'hjs-io/lib/reader';
import {
    ABORT_STATE,
    ARRAY_BUFFER,
    BLOB,
    DOCUMENT,
    ERROR_STATE,
    JSON,
    LOAD_END_STATE,
    LOAD_START_STATE,
    LOAD_STATE,
    PROGRESS_STATE,
    TEXT,
    TIMEOUT_STATE,
    GET,
    UNKNOWN,
    HTTPConnection,
    HTTPMessage,
    HTTPRequestHandler } from './http';

const TYPES = [
    'application/andrew-inset			ez',
    'application/applixware				aw',
    'application/atom+xml				atom',
    'application/atomcat+xml				atomcat',
    'application/atomsvc+xml				atomsvc',
    'application/ccxml+xml				ccxml',
    'application/cdmi-capability			cdmia',
    'application/cdmi-container			cdmic',
    'application/cdmi-domain				cdmid',
    'application/cdmi-object				cdmio',
    'application/cdmi-queue				cdmiq',
    'application/cu-seeme				cu',
    'application/davmount+xml			davmount',
    'application/docbook+xml				dbk',
    'application/dssc+der				dssc',
    'application/dssc+xml				xdssc',
    'application/ecmascript				ecma',
    'application/emma+xml				emma',
    'application/epub+zip				epub',
    'application/exi					exi',
    'application/font-tdpfr				pfr',
    'application/gml+xml				gml',
    'application/gpx+xml				gpx',
    'application/gxf					gxf',
    'application/hyperstudio				stk',
    'application/inkml+xml				ink inkml',
    'application/ipfix				ipfix',
    'application/java-archive			jar',
    'application/java-serialized-object		ser',
    'application/java-vm				class',
    'application/javascript				js',
    'application/json				json',
    'application/jsonml+json				jsonml',
    'application/lost+xml				lostxml',
    'application/mac-binhex40			hqx',
    'application/mac-compactpro			cpt',
    'application/mads+xml				mads',
    'application/marc				mrc',
    'application/marcxml+xml				mrcx',
    'application/mathematica				ma nb mb',
    'application/mathml+xml				mathml',
    'application/mbox				mbox',
    'application/mediaservercontrol+xml		mscml',
    'application/metalink+xml			metalink',
    'application/metalink4+xml			meta4',
    'application/mets+xml				mets',
    'application/mods+xml				mods',
    'application/mp21				m21 mp21',
    'application/mp4					mp4s',
    'application/msword				doc dot',
    'application/mxf					mxf',
    'application/octet-stream	bin dms lrf mar so dist distz pkg bpk dump elc deploy',
    'application/oda					oda',
    'application/oebps-package+xml			opf',
    'application/ogg					ogx',
    'application/omdoc+xml				omdoc',
    'application/onenote				onetoc onetoc2 onetmp onepkg',
    'application/oxps				oxps',
    'application/patch-ops-error+xml			xer',
    'application/pdf					pdf',
    'application/pgp-encrypted			pgp',
    'application/pgp-signature			asc sig',
    'application/pics-rules				prf',
    'application/pkcs10				p10',
    'application/pkcs7-mime				p7m p7c',
    'application/pkcs7-signature			p7s',
    'application/pkcs8				p8',
    'application/pkix-attr-cert			ac',
    'application/pkix-cert				cer',
    'application/pkix-crl				crl',
    'application/pkix-pkipath			pkipath',
    'application/pkixcmp				pki',
    'application/pls+xml				pls',
    'application/postscript				ai eps ps',
    'application/prs.cww				cww',
    'application/pskc+xml				pskcxml',
    'application/rdf+xml				rdf',
    'application/reginfo+xml				rif',
    'application/relax-ng-compact-syntax		rnc',
    'application/resource-lists+xml			rl',
    'application/resource-lists-diff+xml		rld',
    'application/rls-services+xml			rs',
    'application/rpki-ghostbusters			gbr',
    'application/rpki-manifest			mft',
    'application/rpki-roa				roa',
    'application/rsd+xml				rsd',
    'application/rss+xml				rss',
    'application/rtf					rtf',
    'application/sbml+xml				sbml',
    'application/scvp-cv-request			scq',
    'application/scvp-cv-response			scs',
    'application/scvp-vp-request			spq',
    'application/scvp-vp-response			spp',
    'application/sdp					sdp',
    'application/set-payment-initiation		setpay',
    'application/set-registration-initiation		setreg',
    'application/shf+xml				shf',
    'application/smil+xml				smi smil',
    'application/sparql-query			rq',
    'application/sparql-results+xml			srx',
    'application/srgs				gram',
    'application/srgs+xml				grxml',
    'application/sru+xml				sru',
    'application/ssdl+xml				ssdl',
    'application/ssml+xml				ssml',
    'application/tei+xml				tei teicorpus',
    'application/thraud+xml				tfi',
    'application/timestamped-data			tsd',
    'application/vnd.3gpp.pic-bw-large		plb',
    'application/vnd.3gpp.pic-bw-small		psb',
    'application/vnd.3gpp.pic-bw-var			pvb',
    'application/vnd.3gpp2.tcap			tcap',
    'application/vnd.3m.post-it-notes		pwn',
    'application/vnd.accpac.simply.aso		aso',
    'application/vnd.accpac.simply.imp		imp',
    'application/vnd.acucobol			acu',
    'application/vnd.acucorp				atc acutc',
    'application/vnd.adobe.air-application-installer-package+zip	air',
    'application/vnd.adobe.formscentral.fcdt		fcdt',
    'application/vnd.adobe.fxp			fxp fxpl',
    'application/vnd.adobe.xdp+xml			xdp',
    'application/vnd.adobe.xfdf			xfdf',
    'application/vnd.ahead.space			ahead',
    'application/vnd.airzip.filesecure.azf		azf',
    'application/vnd.airzip.filesecure.azs		azs',
    'application/vnd.amazon.ebook			azw',
    'application/vnd.americandynamics.acc		acc',
    'application/vnd.amiga.ami			ami',
    'application/vnd.android.package-archive		apk',
    'application/vnd.anser-web-certificate-issue-initiation	cii',
    'application/vnd.anser-web-funds-transfer-initiation	fti',
    'application/vnd.antix.game-component		atx',
    'application/vnd.apple.installer+xml		mpkg',
    'application/vnd.apple.mpegurl			m3u8',
    'application/vnd.aristanetworks.swi		swi',
    'application/vnd.astraea-software.iota		iota',
    'application/vnd.audiograph			aep',
    'application/vnd.blueice.multipass		mpm',
    'application/vnd.bmi				bmi',
    'application/vnd.businessobjects			rep',
    'application/vnd.chemdraw+xml			cdxml',
    'application/vnd.chipnuts.karaoke-mmd		mmd',
    'application/vnd.cinderella			cdy',
    'application/vnd.claymore			cla',
    'application/vnd.cloanto.rp9			rp9',
    'application/vnd.clonk.c4group			c4g c4d c4f c4p c4u',
    'application/vnd.cluetrust.cartomobile-config		c11amc',
    'application/vnd.cluetrust.cartomobile-config-pkg	c11amz',
    'application/vnd.commonspace			csp',
    'application/vnd.contact.cmsg			cdbcmsg',
    'application/vnd.cosmocaller			cmc',
    'application/vnd.crick.clicker			clkx',
    'application/vnd.crick.clicker.keyboard		clkk',
    'application/vnd.crick.clicker.palette		clkp',
    'application/vnd.crick.clicker.template		clkt',
    'application/vnd.crick.clicker.wordbank		clkw',
    'application/vnd.criticaltools.wbs+xml		wbs',
    'application/vnd.ctc-posml			pml',
    'application/vnd.cups-ppd			ppd',
    'application/vnd.curl.car			car',
    'application/vnd.curl.pcurl			pcurl',
    'application/vnd.dart				dart',
    'application/vnd.data-vision.rdz			rdz',
    'application/vnd.dece.data			uvf uvvf uvd uvvd',
    'application/vnd.dece.ttml+xml			uvt uvvt',
    'application/vnd.dece.unspecified		uvx uvvx',
    'application/vnd.dece.zip			uvz uvvz',
    'application/vnd.denovo.fcselayout-link		fe_launch',
    'application/vnd.dna				dna',
    'application/vnd.dolby.mlp			mlp',
    'application/vnd.dpgraph				dpg',
    'application/vnd.dreamfactory			dfac',
    'application/vnd.ds-keypoint			kpxx',
    'application/vnd.dvb.ait				ait',
    'application/vnd.dvb.service			svc',
    'application/vnd.dynageo				geo',
    'application/vnd.ecowin.chart			mag',
    'application/vnd.enliven				nml',
    'application/vnd.epson.esf			esf',
    'application/vnd.epson.msf			msf',
    'application/vnd.epson.quickanime		qam',
    'application/vnd.epson.salt			slt',
    'application/vnd.epson.ssf			ssf',
    'application/vnd.eszigno3+xml			es3 et3',
    'application/vnd.ezpix-album			ez2',
    'application/vnd.ezpix-package			ez3',
    'application/vnd.fdf				fdf',
    'application/vnd.fdsn.mseed			mseed',
    'application/vnd.fdsn.seed			seed dataless',
    'application/vnd.flographit			gph',
    'application/vnd.fluxtime.clip			ftc',
    'application/vnd.framemaker			fm frame maker book',
    'application/vnd.frogans.fnc			fnc',
    'application/vnd.frogans.ltf			ltf',
    'application/vnd.fsc.weblaunch			fsc',
    'application/vnd.fujitsu.oasys			oas',
    'application/vnd.fujitsu.oasys2			oa2',
    'application/vnd.fujitsu.oasys3			oa3',
    'application/vnd.fujitsu.oasysgp			fg5',
    'application/vnd.fujitsu.oasysprs		bh2',
    'application/vnd.fujixerox.ddd			ddd',
    'application/vnd.fujixerox.docuworks		xdw',
    'application/vnd.fujixerox.docuworks.binder	xbd',
    'application/vnd.fuzzysheet			fzs',
    'application/vnd.genomatix.tuxedo		txd',
    'application/vnd.geogebra.file			ggb',
    'application/vnd.geogebra.tool			ggt',
    'application/vnd.geometry-explorer		gex gre',
    'application/vnd.geonext				gxt',
    'application/vnd.geoplan				g2w',
    'application/vnd.geospace			g3w',
    'application/vnd.gmx				gmx',
    'application/vnd.google-earth.kml+xml		kml',
    'application/vnd.google-earth.kmz		kmz',
    'application/vnd.grafeq				gqf gqs',
    'application/vnd.groove-account			gac',
    'application/vnd.groove-help			ghf',
    'application/vnd.groove-identity-message		gim',
    'application/vnd.groove-injector			grv',
    'application/vnd.groove-tool-message		gtm',
    'application/vnd.groove-tool-template		tpl',
    'application/vnd.groove-vcard			vcg',
    'application/vnd.hal+xml				hal',
    'application/vnd.handheld-entertainment+xml	zmm',
    'application/vnd.hbci				hbci',
    'application/vnd.hhe.lesson-player		les',
    'application/vnd.hp-hpgl				hpgl',
    'application/vnd.hp-hpid				hpid',
    'application/vnd.hp-hps				hps',
    'application/vnd.hp-jlyt				jlt',
    'application/vnd.hp-pcl				pcl',
    'application/vnd.hp-pclxl			pclxl',
    'application/vnd.hydrostatix.sof-data		sfd-hdstx',
    'application/vnd.ibm.minipay			mpy',
    'application/vnd.ibm.modcap			afp listafp list3820',
    'application/vnd.ibm.rights-management		irm',
    'application/vnd.ibm.secure-container		sc',
    'application/vnd.iccprofile			icc icm',
    'application/vnd.igloader			igl',
    'application/vnd.immervision-ivp			ivp',
    'application/vnd.immervision-ivu			ivu',
    'application/vnd.insors.igm			igm',
    'application/vnd.intercon.formnet		xpw xpx',
    'application/vnd.intergeo			i2g',
    'application/vnd.intu.qbo			qbo',
    'application/vnd.intu.qfx			qfx',
    'application/vnd.ipunplugged.rcprofile		rcprofile',
    'application/vnd.irepository.package+xml		irp',
    'application/vnd.is-xpr				xpr',
    'application/vnd.isac.fcs			fcs',
    'application/vnd.jam				jam',
    'application/vnd.jcp.javame.midlet-rms		rms',
    'application/vnd.jisp				jisp',
    'application/vnd.joost.joda-archive		joda',
    'application/vnd.kahootz				ktz ktr',
    'application/vnd.kde.karbon			karbon',
    'application/vnd.kde.kchart			chrt',
    'application/vnd.kde.kformula			kfo',
    'application/vnd.kde.kivio			flw',
    'application/vnd.kde.kontour			kon',
    'application/vnd.kde.kpresenter			kpr kpt',
    'application/vnd.kde.kspread			ksp',
    'application/vnd.kde.kword			kwd kwt',
    'application/vnd.kenameaapp			htke',
    'application/vnd.kidspiration			kia',
    'application/vnd.kinar				kne knp',
    'application/vnd.koan				skp skd skt skm',
    'application/vnd.kodak-descriptor		sse',
    'application/vnd.las.las+xml			lasxml',
    'application/vnd.llamagraphics.life-balance.desktop	lbd',
    'application/vnd.llamagraphics.life-balance.exchange+xml	lbe',
    'application/vnd.lotus-1-2-3			123',
    'application/vnd.lotus-approach			apr',
    'application/vnd.lotus-freelance			pre',
    'application/vnd.lotus-notes			nsf',
    'application/vnd.lotus-organizer			org',
    'application/vnd.lotus-screencam			scm',
    'application/vnd.lotus-wordpro			lwp',
    'application/vnd.macports.portpkg		portpkg',
    'application/vnd.mcd				mcd',
    'application/vnd.medcalcdata			mc1',
    'application/vnd.mediastation.cdkey		cdkey',
    'application/vnd.mfer				mwf',
    'application/vnd.mfmp				mfm',
    'application/vnd.micrografx.flo			flo',
    'application/vnd.micrografx.igx			igx',
    'application/vnd.mif				mif',
    'application/vnd.mobius.daf			daf',
    'application/vnd.mobius.dis			dis',
    'application/vnd.mobius.mbk			mbk',
    'application/vnd.mobius.mqy			mqy',
    'application/vnd.mobius.msl			msl',
    'application/vnd.mobius.plc			plc',
    'application/vnd.mobius.txf			txf',
    'application/vnd.mophun.application		mpn',
    'application/vnd.mophun.certificate		mpc',
    'application/vnd.mozilla.xul+xml			xul',
    'application/vnd.ms-artgalry			cil',
    'application/vnd.ms-cab-compressed		cab',
    'application/vnd.ms-excel			xls xlm xla xlc xlt xlw',
    'application/vnd.ms-excel.addin.macroenabled.12		xlam',
    'application/vnd.ms-excel.sheet.binary.macroenabled.12	xlsb',
    'application/vnd.ms-excel.sheet.macroenabled.12		xlsm',
    'application/vnd.ms-excel.template.macroenabled.12	xltm',
    'application/vnd.ms-fontobject			eot',
    'application/vnd.ms-htmlhelp			chm',
    'application/vnd.ms-ims				ims',
    'application/vnd.ms-lrm				lrm',
    'application/vnd.ms-officetheme			thmx',
    'application/vnd.ms-pki.seccat			cat',
    'application/vnd.ms-pki.stl			stl',
    'application/vnd.ms-powerpoint			ppt pps pot',
    'application/vnd.ms-powerpoint.addin.macroenabled.12		ppam',
    'application/vnd.ms-powerpoint.presentation.macroenabled.12	pptm',
    'application/vnd.ms-powerpoint.slide.macroenabled.12		sldm',
    'application/vnd.ms-powerpoint.slideshow.macroenabled.12		ppsm',
    'application/vnd.ms-powerpoint.template.macroenabled.12		potm',
    'application/vnd.ms-project			mpp mpt',
    'application/vnd.ms-word.document.macroenabled.12	docm',
    'application/vnd.ms-word.template.macroenabled.12	dotm',
    'application/vnd.ms-works			wps wks wcm wdb',
    'application/vnd.ms-wpl				wpl',
    'application/vnd.ms-xpsdocument			xps',
    'application/vnd.mseq				mseq',
    'application/vnd.musician			mus',
    'application/vnd.muvee.style			msty',
    'application/vnd.mynfc				taglet',
    'application/vnd.neurolanguage.nlu		nlu',
    'application/vnd.nitf				ntf nitf',
    'application/vnd.noblenet-directory		nnd',
    'application/vnd.noblenet-sealer			nns',
    'application/vnd.noblenet-web			nnw',
    'application/vnd.nokia.n-gage.data		ngdat',
    'application/vnd.nokia.n-gage.symbian.install	n-gage',
    'application/vnd.nokia.radio-preset		rpst',
    'application/vnd.nokia.radio-presets		rpss',
    'application/vnd.novadigm.edm			edm',
    'application/vnd.novadigm.edx			edx',
    'application/vnd.novadigm.ext			ext',
    'application/vnd.oasis.opendocument.chart		odc',
    'application/vnd.oasis.opendocument.chart-template	otc',
    'application/vnd.oasis.opendocument.database		odb',
    'application/vnd.oasis.opendocument.formula		odf',
    'application/vnd.oasis.opendocument.formula-template	odft',
    'application/vnd.oasis.opendocument.graphics		odg',
    'application/vnd.oasis.opendocument.graphics-template	otg',
    'application/vnd.oasis.opendocument.image		odi',
    'application/vnd.oasis.opendocument.image-template	oti',
    'application/vnd.oasis.opendocument.presentation		odp',
    'application/vnd.oasis.opendocument.presentation-template	otp',
    'application/vnd.oasis.opendocument.spreadsheet		ods',
    'application/vnd.oasis.opendocument.spreadsheet-template	ots',
    'application/vnd.oasis.opendocument.text			odt',
    'application/vnd.oasis.opendocument.text-master		odm',
    'application/vnd.oasis.opendocument.text-template	ott',
    'application/vnd.oasis.opendocument.text-web		oth',
    'application/vnd.olpc-sugar			xo',
    'application/vnd.oma.dd2+xml			dd2',
    'application/vnd.openofficeorg.extension		oxt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation	pptx',
    'application/vnd.openxmlformats-officedocument.presentationml.slide	sldx',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow	ppsx',
    'application/vnd.openxmlformats-officedocument.presentationml.template	potx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet	xlsx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template	xltx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document	docx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template	dotx',
    'application/vnd.osgeo.mapguide.package		mgp',
    'application/vnd.osgi.dp				dp',
    'application/vnd.osgi.subsystem			esa',
    'application/vnd.palm				pdb pqa oprc',
    'application/vnd.pawaafile			paw',
    'application/vnd.pg.format			str',
    'application/vnd.pg.osasli			ei6',
    'application/vnd.picsel				efif',
    'application/vnd.pmi.widget			wg',
    'application/vnd.pocketlearn			plf',
    'application/vnd.powerbuilder6			pbd',
    'application/vnd.previewsystems.box		box',
    'application/vnd.proteus.magazine		mgz',
    'application/vnd.publishare-delta-tree		qps',
    'application/vnd.pvi.ptid1			ptid',
    'application/vnd.quark.quarkxpress		qxd qxt qwd qwt qxl qxb',
    'application/vnd.realvnc.bed			bed',
    'application/vnd.recordare.musicxml		mxl',
    'application/vnd.recordare.musicxml+xml		musicxml',
    'application/vnd.rig.cryptonote			cryptonote',
    'application/vnd.rim.cod				cod',
    'application/vnd.rn-realmedia			rm',
    'application/vnd.rn-realmedia-vbr		rmvb',
    'application/vnd.route66.link66+xml		link66',
    'application/vnd.sailingtracker.track		st',
    'application/vnd.seemail				see',
    'application/vnd.sema				sema',
    'application/vnd.semd				semd',
    'application/vnd.semf				semf',
    'application/vnd.shana.informed.formdata		ifm',
    'application/vnd.shana.informed.formtemplate	itp',
    'application/vnd.shana.informed.interchange	iif',
    'application/vnd.shana.informed.package		ipk',
    'application/vnd.simtech-mindmapper		twd twds',
    'application/vnd.smaf				mmf',
    'application/vnd.smart.teacher			teacher',
    'application/vnd.solent.sdkm+xml			sdkm sdkd',
    'application/vnd.spotfire.dxp			dxp',
    'application/vnd.spotfire.sfs			sfs',
    'application/vnd.stardivision.calc		sdc',
    'application/vnd.stardivision.draw		sda',
    'application/vnd.stardivision.impress		sdd',
    'application/vnd.stardivision.math		smf',
    'application/vnd.stardivision.writer		sdw vor',
    'application/vnd.stardivision.writer-global	sgl',
    'application/vnd.stepmania.package		smzip',
    'application/vnd.stepmania.stepchart		sm',
    'application/vnd.sun.xml.calc			sxc',
    'application/vnd.sun.xml.calc.template		stc',
    'application/vnd.sun.xml.draw			sxd',
    'application/vnd.sun.xml.draw.template		std',
    'application/vnd.sun.xml.impress			sxi',
    'application/vnd.sun.xml.impress.template	sti',
    'application/vnd.sun.xml.math			sxm',
    'application/vnd.sun.xml.writer			sxw',
    'application/vnd.sun.xml.writer.global		sxg',
    'application/vnd.sun.xml.writer.template		stw',
    'application/vnd.sus-calendar			sus susp',
    'application/vnd.svd				svd',
    'application/vnd.symbian.install			sis sisx',
    'application/vnd.syncml+xml			xsm',
    'application/vnd.syncml.dm+wbxml			bdm',
    'application/vnd.syncml.dm+xml			xdm',
    'application/vnd.tao.intent-module-archive	tao',
    'application/vnd.tcpdump.pcap			pcap cap dmp',
    'application/vnd.tmobile-livetv			tmo',
    'application/vnd.trid.tpt			tpt',
    'application/vnd.triscape.mxs			mxs',
    'application/vnd.trueapp				tra',
    'application/vnd.ufdl				ufd ufdl',
    'application/vnd.uiq.theme			utz',
    'application/vnd.umajin				umj',
    'application/vnd.unity				unityweb',
    'application/vnd.uoml+xml			uoml',
    'application/vnd.vcx				vcx',
    'application/vnd.visio				vsd vst vss vsw',
    'application/vnd.visionary			vis',
    'application/vnd.vsf				vsf',
    'application/vnd.wap.wbxml			wbxml',
    'application/vnd.wap.wmlc			wmlc',
    'application/vnd.wap.wmlscriptc			wmlsc',
    'application/vnd.webturbo			wtb',
    'application/vnd.wolfram.player			nbp',
    'application/vnd.wordperfect			wpd',
    'application/vnd.wqd				wqd',
    'application/vnd.wt.stf				stf',
    'application/vnd.xara				xar',
    'application/vnd.xfdl				xfdl',
    'application/vnd.yamaha.hv-dic			hvd',
    'application/vnd.yamaha.hv-script		hvs',
    'application/vnd.yamaha.hv-voice			hvp',
    'application/vnd.yamaha.openscoreformat			osf',
    'application/vnd.yamaha.openscoreformat.osfpvg+xml	osfpvg',
    'application/vnd.yamaha.smaf-audio		saf',
    'application/vnd.yamaha.smaf-phrase		spf',
    'application/vnd.yellowriver-custom-menu		cmp',
    'application/vnd.zul				zir zirz',
    'application/vnd.zzazz.deck+xml			zaz',
    'application/voicexml+xml			vxml',
    'application/widget				wgt',
    'application/winhlp				hlp',
    'application/wsdl+xml				wsdl',
    'application/wspolicy+xml			wspolicy',
    'application/x-7z-compressed			7z',
    'application/x-abiword				abw',
    'application/x-ace-compressed			ace',
    'application/x-apple-diskimage			dmg',
    'application/x-authorware-bin			aab x32 u32 vox',
    'application/x-authorware-map			aam',
    'application/x-authorware-seg			aas',
    'application/x-bcpio				bcpio',
    'application/x-bittorrent			torrent',
    'application/x-blorb				blb blorb',
    'application/x-bzip				bz',
    'application/x-bzip2				bz2 boz',
    'application/x-cbr				cbr cba cbt cbz cb7',
    'application/x-cdlink				vcd',
    'application/x-cfs-compressed			cfs',
    'application/x-chat				chat',
    'application/x-chess-pgn				pgn',
    'application/x-conference			nsc',
    'application/x-cpio				cpio',
    'application/x-csh				csh',
    'application/x-debian-package			deb udeb',
    'application/x-dgc-compressed			dgc',
    'application/x-director			dir dcr dxr cst cct cxt w3d fgd swa',
    'application/x-doom				wad',
    'application/x-dtbncx+xml			ncx',
    'application/x-dtbook+xml			dtb',
    'application/x-dtbresource+xml			res',
    'application/x-dvi				dvi',
    'application/x-envoy				evy',
    'application/x-eva				eva',
    'application/x-font-bdf				bdf',
    'application/x-font-ghostscript			gsf',
    'application/x-font-linux-psf			psf',
    'application/x-font-otf				otf',
    'application/x-font-pcf				pcf',
    'application/x-font-snf				snf',
    'application/x-font-ttf				ttf ttc',
    'application/x-font-type1			pfa pfb pfm afm',
    'application/font-woff				woff',
    'application/x-freearc				arc',
    'application/x-futuresplash			spl',
    'application/x-gca-compressed			gca',
    'application/x-glulx				ulx',
    'application/x-gnumeric				gnumeric',
    'application/x-gramps-xml			gramps',
    'application/x-gtar				gtar',
    'application/x-hdf				hdf',
    'application/x-install-instructions		install',
    'application/x-iso9660-image			iso',
    'application/x-java-jnlp-file			jnlp',
    'application/x-latex				latex',
    'application/x-lzh-compressed			lzh lha',
    'application/x-mie				mie',
    'application/x-mobipocket-ebook			prc mobi',
    'application/x-ms-application			application',
    'application/x-ms-shortcut			lnk',
    'application/x-ms-wmd				wmd',
    'application/x-ms-wmz				wmz',
    'application/x-ms-xbap				xbap',
    'application/x-msaccess				mdb',
    'application/x-msbinder				obd',
    'application/x-mscardfile			crd',
    'application/x-msclip				clp',
    'application/x-msdownload			exe dll com bat msi',
    'application/x-msmediaview			mvb m13 m14',
    'application/x-msmetafile			wmf wmz emf emz',
    'application/x-msmoney				mny',
    'application/x-mspublisher			pub',
    'application/x-msschedule			scd',
    'application/x-msterminal			trm',
    'application/x-mswrite				wri',
    'application/x-netcdf				nc cdf',
    'application/x-nzb				nzb',
    'application/x-pkcs12				p12 pfx',
    'application/x-pkcs7-certificates		p7b spc',
    'application/x-pkcs7-certreqresp			p7r',
    'application/x-rar-compressed			rar',
    'application/x-research-info-systems		ris',
    'application/x-sh				sh',
    'application/x-shar				shar',
    'application/x-shockwave-flash			swf',
    'application/x-silverlight-app			xap',
    'application/x-sql				sql',
    'application/x-stuffit				sit',
    'application/x-stuffitx				sitx',
    'application/x-subrip				srt',
    'application/x-sv4cpio				sv4cpio',
    'application/x-sv4crc				sv4crc',
    'application/x-t3vm-image			t3',
    'application/x-tads				gam',
    'application/x-tar				tar',
    'application/x-tcl				tcl',
    'application/x-tex				tex',
    'application/x-tex-tfm				tfm',
    'application/x-texinfo				texinfo texi',
    'application/x-tgif				obj',
    'application/x-ustar				ustar',
    'application/x-wais-source			src',
    'application/x-x509-ca-cert			der crt',
    'application/x-xfig				fig',
    'application/x-xliff+xml				xlf',
    'application/x-xpinstall				xpi',
    'application/x-xz				xz',
    'application/x-zmachine				z1 z2 z3 z4 z5 z6 z7 z8',
    'application/xaml+xml				xaml',
    'application/xcap-diff+xml			xdf',
    'application/xenc+xml				xenc',
    'application/xhtml+xml				xhtml xht',
    'application/xml					xml xsl',
    'application/xml-dtd				dtd',
    'application/xop+xml				xop',
    'application/xproc+xml				xpl',
    'application/xslt+xml				xslt',
    'application/xspf+xml				xspf',
    'application/xv+xml				mxml xhvml xvml xvm',
    'application/yang				yang',
    'application/yin+xml				yin',
    'application/zip					zip',
    'audio/adpcm					adp',
    'audio/basic					au snd',
    'audio/midi					mid midi kar rmi',
    'audio/mp4					mp4a',
    'audio/mpeg					mpga mp2 mp2a mp3 m2a m3a',
    'audio/ogg					oga ogg spx',
    'audio/s3m					s3m',
    'audio/silk					sil',
    'audio/vnd.dece.audio				uva uvva',
    'audio/vnd.digital-winds				eol',
    'audio/vnd.dra					dra',
    'audio/vnd.dts					dts',
    'audio/vnd.dts.hd				dtshd',
    'audio/vnd.lucent.voice				lvp',
    'audio/vnd.ms-playready.media.pya		pya',
    'audio/vnd.nuera.ecelp4800			ecelp4800',
    'audio/vnd.nuera.ecelp7470			ecelp7470',
    'audio/vnd.nuera.ecelp9600			ecelp9600',
    'audio/vnd.rip					rip',
    'audio/webm					weba',
    'audio/x-aac					aac',
    'audio/x-aiff					aif aiff aifc',
    'audio/x-caf					caf',
    'audio/x-flac					flac',
    'audio/x-matroska				mka',
    'audio/x-mpegurl					m3u',
    'audio/x-ms-wax					wax',
    'audio/x-ms-wma					wma',
    'audio/x-pn-realaudio				ram ra',
    'audio/x-pn-realaudio-plugin			rmp',
    'audio/x-wav					wav',
    'audio/xm					xm',
    'chemical/x-cdx					cdx',
    'chemical/x-cif					cif',
    'chemical/x-cmdf					cmdf',
    'chemical/x-cml					cml',
    'chemical/x-csml					csml',
    'chemical/x-xyz					xyz',
    'image/bmp					bmp',
    'image/cgm					cgm',
    'image/g3fax					g3',
    'image/gif					gif',
    'image/ief					ief',
    'image/jpeg					jpeg jpg jpe',
    'image/ktx					ktx',
    'image/png					png',
    'image/prs.btif					btif',
    'image/sgi					sgi',
    'image/svg+xml					svg svgz',
    'image/tiff					tiff tif',
    'image/vnd.adobe.photoshop			psd',
    'image/vnd.dece.graphic				uvi uvvi uvg uvvg',
    'image/vnd.dvb.subtitle				sub',
    'image/vnd.djvu					djvu djv',
    'image/vnd.dwg					dwg',
    'image/vnd.dxf					dxf',
    'image/vnd.fastbidsheet				fbs',
    'image/vnd.fpx					fpx',
    'image/vnd.fst					fst',
    'image/vnd.fujixerox.edmics-mmr			mmr',
    'image/vnd.fujixerox.edmics-rlc			rlc',
    'image/vnd.ms-modi				mdi',
    'image/vnd.ms-photo				wdp',
    'image/vnd.net-fpx				npx',
    'image/vnd.wap.wbmp				wbmp',
    'image/vnd.xiff					xif',
    'image/webp					webp',
    'image/x-3ds					3ds',
    'image/x-cmu-raster				ras',
    'image/x-cmx					cmx',
    'image/x-freehand				fh fhc fh4 fh5 fh7',
    'image/x-icon					ico',
    'image/x-mrsid-image				sid',
    'image/x-pcx					pcx',
    'image/x-pict					pic pct',
    'image/x-portable-anymap				pnm',
    'image/x-portable-bitmap				pbm',
    'image/x-portable-graymap			pgm',
    'image/x-portable-pixmap				ppm',
    'image/x-rgb					rgb',
    'image/x-tga					tga',
    'image/x-xbitmap					xbm',
    'image/x-xpixmap					xpm',
    'image/x-xwindowdump				xwd',
    'message/rfc822					eml mime',
    'model/iges					igs iges',
    'model/mesh					msh mesh silo',
    'model/vnd.collada+xml				dae',
    'model/vnd.dwf					dwf',
    'model/vnd.gdl					gdl',
    'model/vnd.gtw					gtw',
    'model/vnd.mts					mts',
    'model/vnd.vtu					vtu',
    'model/vrml					wrl vrml',
    'model/x3d+binary				x3db x3dbz',
    'model/x3d+vrml					x3dv x3dvz',
    'model/x3d+xml					x3d x3dz',
    'text/cache-manifest				appcache',
    'text/calendar					ics ifb',
    'text/css					css',
    'text/csv					csv',
    'text/html					html htm',
    'text/n3						n3',
    'text/plain					txt text conf def list log in',
    'text/prs.lines.tag				dsc',
    'text/richtext					rtx',
    'text/sgml					sgml sgm',
    'text/tab-separated-values			tsv',
    'text/troff					t tr roff man me ms',
    'text/turtle					ttl',
    'text/uri-list					uri uris urls',
    'text/vcard					vcard',
    'text/vnd.curl					curl',
    'text/vnd.curl.dcurl				dcurl',
    'text/vnd.curl.scurl				scurl',
    'text/vnd.curl.mcurl				mcurl',
    'text/vnd.dvb.subtitle				sub',
    'text/vnd.fly					fly',
    'text/vnd.fmi.flexstor				flx',
    'text/vnd.graphviz				gv',
    'text/vnd.in3d.3dml				3dml',
    'text/vnd.in3d.spot				spot',
    'text/vnd.sun.j2me.app-descriptor		jad',
    'text/vnd.wap.wml				wml',
    'text/vnd.wap.wmlscript				wmls',
    'text/x-asm					s asm',
    'text/x-c					c cc cxx cpp h hh dic',
    'text/x-fortran					f for f77 f90',
    'text/x-java-source				java',
    'text/x-opml					opml',
    'text/x-pascal					p pas',
    'text/x-nfo					nfo',
    'text/x-setext					etx',
    'text/x-sfv					sfv',
    'text/x-uuencode					uu',
    'text/x-vcalendar				vcs',
    'text/x-vcard					vcf',
    'video/3gpp					3gp',
    'video/3gpp2					3g2',
    'video/h261					h261',
    'video/h263					h263',
    'video/h264					h264',
    'video/jpeg					jpgv',
    'video/jpm					jpm jpgm',
    'video/mj2					mj2 mjp2',
    'video/mp4					mp4 mp4v mpg4',
    'video/mpeg					mpeg mpg mpe m1v m2v',
    'video/ogg					ogv',
    'video/quicktime					qt mov',
    'video/vnd.dece.hd				uvh uvvh',
    'video/vnd.dece.mobile				uvm uvvm',
    'video/vnd.dece.pd				uvp uvvp',
    'video/vnd.dece.sd				uvs uvvs',
    'video/vnd.dece.video				uvv uvvv',
    'video/vnd.dvb.file				dvb',
    'video/vnd.fvt					fvt',
    'video/vnd.mpegurl				mxu m4u',
    'video/vnd.ms-playready.media.pyv		pyv',
    'video/vnd.uvvu.mp4				uvu uvvu',
    'video/vnd.vivo					viv',
    'video/webm					webm',
    'video/x-f4v					f4v',
    'video/x-fli					fli',
    'video/x-flv					flv',
    'video/x-m4v					m4v',
    'video/x-matroska				mkv mk3d mks',
    'video/x-mng					mng',
    'video/x-ms-asf					asf asx',
    'video/x-ms-vob					vob',
    'video/x-ms-wm					wm',
    'video/x-ms-wmv					wmv',
    'video/x-ms-wmx					wmx',
    'video/x-ms-wvx					wvx',
    'video/x-msvideo					avi',
    'video/x-sgi-movie				movie',
    'video/x-smv					smv'];

const MIMES_TYPE = {};

export class Mimetype {

    constructor({ types=null, primary=null, sub=null, extensions=null } = {}) {
        this.primaryType = "application";
        this.subType = "*";
        this.fileExtensions = [];
        if (types !== null) {
            let parts = types.split("/");
            this.primaryType = parts[0];
            this.subType = parts[1];
        } else if (primary !== null && sub !== null) {
            this.primaryType = primary;
            this.subType = sub;
        }
        if (extensions !== null) {
            this.fileExtensions = extensions;
        }
    }

    static get(types) {
        return MIMES_TYPE[types];
    }

    static getByExtension(extension) {
        for (let p in MIMES_TYPE) {
            if (MIMES_TYPE[p].matchExtension(extension)) {
                return MIMES_TYPE[p];
            }
        }
        return 	null;
    }

    getBaseType() {
        return this.primaryType + "/" + this.subType;
    }

    getFileExtensionAt(index) {
        return this.fileExtensions[index];
    }

    getFileExtensions() {
        return this.fileExtensions;
    }

    getPrimaryType() {
        return this.primaryType;
    }

    getSubType() {
        return this.subType;
    }

    matchExtension(extension) {
        return this.fileExtensions.indexOf(extension) !== -1;
    }

    static map() {
        let value = null;
        let parts = null;
        let len = TYPES.length;
        while(len--) {
            value = TYPES[len];
            parts = value.split(/\s+/g);
            if (value.length > 0) {
                MIMES_TYPE[parts[0]] = new Mimetype({
                    types : parts[0],
                    extensions : parts.splice(1, parts.length)
                });
            }
        }
    }

    matchType(type) {
        return this.primaryType === type.getPrimaryType() &&
            (this.subType === "*" || type.getSubType() === "*" || this.subType === type.getSubType());
    }

    setFileExtension(index, extension) {
        this.fileExtensions.splice(index, 1, extension);
    }

    setPrimaryType(primary) {
        this.primaryType = primary.toLowerCase();
    }

    setSubType(sub) {
        this.subType = sub.toLowerCase();
    }

    toString() {
        return this.getBaseType() + " " + this.fileExtensions.join(" ");
    }
}

Mimetype.map();

const OPERATORS = [ '+', '#', '.', '/', ';', '?', '&' ];

const isKeyOperator = (operator) => {
    return operator === ';' || operator === '&' || operator === '?';
};

export class UrlContentHandler {

    constructor({ onHandleContent = null }) {
        if (onHandleContent !== null) {
            this.onHandleContent = onHandleContent;
        }
    }

    onHandleContent(content) {
    }

}

let HANDLERS = null;
let FACTORY = null;

export const STREAM_CLOSE = 0;
export const STREAM_OPEN = 1;

export class UrlStreamHandlerFactory {

    constructor() {

    }

    createUrlStreamHandler(protocol) {
        return HANDLERS[protocol];
    }

}

export class UrlParts {

    constructor(file = null) {
        this.path = null;
        this.query = null;
        this.ref = null;
        if (file !== null) {
            let ind = file.indexOf('#');
            this.ref = ind < 0 ? null : file.substring(ind + 1);
            file = ind < 0 ? file : file.substring(0, ind);
            let q = file.lastIndexOf('?');
            if (q !== -1) {
                this.query = file.substring(q + 1, q + 1
                    + file.length);
                this.path = file.substring(0, q);
            } else {
                this.path = file;
            }
        }
    }

    clone() {
        let p = new UrlParts();
        p.path = this.path;
        p.query = this.query;
        p.ref = this.ref;
        return p;
    }

    getPath() {
        return this.path;
    }

    getQuery() {
        return this.query;
    }

    getRef() {
        return this.ref;
    }
}

export class Url extends HTTPRequestHandler {

    constructor({
        protocol = null,
        host = null,
        port = null,
        file = null,
        handler = null,
        spec = null,
        context = null
        } = {}) {
        super();
        this.mUrlContentHandler = null;
        if (protocol !== null &&
            host !== null &&
            port !== null &&
            file !== null) {
            protocol = protocol.toLowerCase();
            this.protocol = protocol;
            if (host.indexOf(':') >= 0
                && !char.startsWith(host, "[")) {
                host = "[" + host + "]";
            }
            this.host = host;
            if (typeof port === "string") {
                port = parseInt(port);
            }
            if (port < -1) {
                throw new URIError(
                    "MalformedUrlException Invalid port number :"
                    + port);
            }
            this.port = port;
            this.authority = (port === -1) ? host : host
                + ":" + port;
            let parts = new UrlParts(file);
            this.path = parts.getPath();
            this.query = parts.getQuery();
            if (this.query !== null) {
                this.file = this.path + "?"
                    + this.query;
            }
            this.fragment = parts.getRef();
            if (handler !== null &&
                (handler = Url.getUrlStreamHandler(protocol)) !== null) {
                throw new URIError(
                    "MalformedUrlException unknown protocol: "
                    + protocol);
            }
            this.handler = handler;
        } else if (spec !== null) {
            let original = spec,
                isRelative = false,
                start = 0,
                newProtocol,
                limit,
                aRef = false, i, c, s,
                ws = ' '.charCodeAt(0);
            limit = spec.length;
            while ((limit > 0)
            && (spec.charAt(limit - 1)
                .charCodeAt(0) <= ws)) {
                limit--;
            }
            while ((start < limit)
            && (spec.charAt(start)
                .charCodeAt(0) <= ws)) {
                start++;
            }
            if (char.regionMatches(spec, true, start,
                    "Url:", 0, 4)) {
                start += 4;
            }
            if (start < spec.length
                && spec.charAt(start) === '#') {
                aRef = true;
            }
            for (i = start; !aRef && (i < limit) && ((c = spec.charAt(i)) !== '/'); i++) {
                if (c === ':') {
                    s = spec.substring(start, i)
                        .toLowerCase();
                    if (this.isValidProtocol(s)) {
                        newProtocol = s;
                        start = i + 1;
                    }
                    break;
                }
            }
            this.protocol = newProtocol;
            if (context !== null &&
                (newProtocol === null ||
                    char.equalsIgnoreCase(newProtocol, context.protocol))) {
                if (handler === null) {
                    handler = context.handler;
                }
                if (context.path !== null &&
                    char.startsWith(context.path, "/")) {
                    newProtocol = null;
                }
                if (newProtocol === null) {
                    this.protocol = context.protocol;
                    this.authority = context.authority;
                    this.userInfo = context.userInfo;
                    this.host = context.host;
                    this.port = context.port;
                    this.file = context.file;
                    this.path = context.path;
                    isRelative = true;
                }
            }
            if (this.protocol === null) {
                throw new URIError(
                    "MalformedUrlException no protocol: "
                    + original);
            }
            if (handler === null &&
                (handler = Url.getUrlStreamHandler(this.protocol)) === null) {
                throw new URIError(
                    "MalformedUrlException unknown protocol: "
                    + this.protocol);
            }
            this.handler = handler;
            i = char.indexOf(spec, '#', start);
            if (i >= 0) {
                this.fragment = spec.substring(i + 1,
                    (i + 1) + limit);
                limit = i;
            }
            if (context !== null) {
                if (isRelative &&
                    start === limit) {
                    this.query = context.query;
                }
                if (this.fragment === null) {
                    this.fragment = context.fragment;
                }
            }
        }
        this.handler.parseUrl(this, spec, start, limit);
    }

    clone() {
        let u = new Url();
        u.authority = this.authority;
        u.protocol = this.protocol;
        u.host = this.host;
        u.port = this.port;
        u.query = this.query;
        u.file = this.file;
        u.fragment = this.fragment;
        u.path = this.path;
        u.userInfo = this.userInfo;
        u.user = this.user;
        u.hostAddress = this.hostAddress;
        u.content = this.content;
        u.handler = this.handler;
        return u;
    }

    static createDOMObjectURL(blob) {
        return URL.createObjectURL(blob);
    }

    static createDOMURL(urlString, baseURLstring) {
        return new URL(urlString, baseURLstring);
    }

    static encodeReserved(value) {
        return value.split(/(%[0-9A-Fa-f]{2})/g).map(
            part => {
                if (!/%[0-9A-Fa-f]/.test(part)) {
                    part = encodeURI(part);
                }
                return part;
            }).join('');
    }

    static encodeValue(operator, value, key) {
        value = (operator === '+' || operator === '#') ? Url
                .encodeReserved(value) : encodeURIComponent(value);
        if (key) {
            return encodeURIComponent(key) + '=' + value;
        }
        return value;
    }

    equals(obj) {
        if (!(obj instanceof Url)) {
            return false;
        }
        let u2 = obj;
        return this.handler.equalsUrl(this, u2);
    }

    static expand(template, context) {
        return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (_, expression, literal) => {
            if (expression) {
                let operator = null, values = [];
                if (OPERATORS.indexOf(expression.charAt(0)) !== -1) {
                    operator = expression.charAt(0);
                    expression = expression.substr(1);
                }
                expression.split(/,/g).forEach(variable => {
                    let tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                    values.push.apply(values, Url.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                });
                if (operator && operator !== '+') {
                    let separator = ',';
                    if (operator === '?') {
                        separator = '&';
                    } else if (operator !== '#') {
                        separator = operator;
                    }
                    return (values.length !== 0 ? operator : '') + values.join(separator);
                } else {
                    return values.join(',');
                }
            } else {
                return Url.encodeReserved(literal);
            }
        });
    }

    getAuthority() {
        return this.authority;
    }

    getContent() {
        return this.content;
    }

    getDefaultPort() {
        return this.handler.getDefaultPort();
    }

    getFile() {
        return this.file;
    }

    getFileExtension() {
        let ext = "";
        let name = this.getFileName();
        if (name.length > 1) {
            ext = name.match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi)[0];
        }
        return ext;
    }

    getFileName() {
        let name = this.handler.parseFileName(this.path);
        if (name.indexOf(".") !== -1) {
            return name;
        }
        return "";
    }

    getFileType() {
        let ext = this.getFileExtension();
        if (ext.length > 0) {
            return Mimetype.getByExtension(ext.replace(".", ""));
        }
        return null;
    }

    getFragment() {
        return this.fragment;
    }

    getHost() {
        return this.host;
    }

    getPath() {
        return this.path;
    }

    getPort() {
        return this.port;
    }

    getProtocol() {
        return this.protocol;
    }

    getQuery() {
        return this.query;
    }

    getRef() {
        return this.ref;
    }

    static getUrlStreamHandler(protocol, factory) {
        FACTORY = FACTORY || Url.setUrlStreamHandlerFactory(factory);
        return FACTORY.createUrlStreamHandler(protocol);
    }

    getUserInfo() {
        return this.userInfo;
    }

    static getValues(context, operator, key, modifier) {
        let value = context[key], result = [];
        if (value !== null && value !== '') {
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                value = value.toString();
                if (modifier && modifier !== '*') {
                    value = value.substring(0, parseInt(modifier, 10));
                }
                result.push(Url.encodeValue(operator, value, isKeyOperator(operator) ? key : null));
            } else {
                if (modifier === '*') {
                    if (Array.isArray(value)) {
                        value.filter(v => { return v !== null; }).forEach(value => {
                            result.push(Url.encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                        });
                    } else {
                        Object.keys(value).forEach(k => {
                            if (value[k] !== null) {
                                result.push(Url.encodeValue(operator, value[k], k));
                            }
                        });
                    }
                } else {
                    let tmp = [];
                    if (Array.isArray(value)) {
                        value.filter(v => { return v !== null; }).forEach(value => {
                            tmp.push(Url.encodeValue(operator, value));
                        });
                    } else {
                        Object.keys(value).forEach(k => {
                            if (value[k] !== null) {
                                tmp.push(encodeURIComponent(k));
                                tmp.push(Url.encodeValue( operator, value[k].toString()));
                            }
                        });
                    }
                    if (isKeyOperator(operator)) {
                        result.push(encodeURIComponent(key) + '='
                            + tmp.join(','));
                    } else if (tmp.length !== 0) {
                        result.push(tmp.join(','));
                    }
                }
            }
        } else {
            if (operator === ';') {
                result.push(encodeURIComponent(key));
            } else if (value === '' && (operator === '&' || operator === '?')) {
                result.push(encodeURIComponent(key) + '=');
            } else if (value === '') {
                result.push('');
            }
        }
        return result;
    }

    hashCode() {
        if (this.h !== -1) {
            return this.h;
        }
        this.h = this.handler.hashCodeUrl(this);
        return this.h;
    }

    isValidProtocol(protocol) {
        let len = protocol.length;
        if (len < 1) {
            return false;
        }
        let c = protocol.charAt(0);
        if (!char.isLetter(c)) {
            return false;
        }
        for (let i = 1; i < len; i++) {
            c = protocol.charAt(i);
            if (!char.isLetterOrDigit(c) && c !== '.'
                && c !== '+' && c !== '-') {
                return false;
            }
        }
        return true;
    }

    notifyContentHandler(content = null) {
        if (content !== null) {
            if (this.mUrlContentHandler !== null) {
                this.mUrlContentHandler.onHandleContent(content);
            } else {
                let contentHandler = UrlContentHandlerFactory.getInstance()
                    .getContentHandler(content.contentType);
                if (contentHandler !== null) {
                    contentHandler.onHandleContent(content);
                }
            }
        }
    }

    onHandleRequest(event) {
        let type = event.type;
        let response = event.response;
        if (type === LOAD_END_STATE) {
            let contentType = response.getContentType();
            let responseType = response.getResponseType();
            this.content = response.getMessageBody();
            if (this.streaming === STREAM_OPEN) {
                switch(responseType) {
                    case ARRAY_BUFFER:
                        this.notifyContentHandler({
                            state: type,
                            contentType: contentType,
                            content: new ByteArrayInputStream({ input: response.getMessageBody() })
                        });
                        break;
                    case BLOB:
                        let url = this;
                        let reader = new FileReader();
                        let onLoadEnd = (evt) => {
                            let buffer = evt.target.result;
                            url.notifyContentHandler({
                                state: type,
                                contentType: contentType,
                                content:new ByteArrayInputStream({ input: buffer })
                            });
                            reader.removeEventListener(evt.type, onLoadEnd, false);
                        };
                        reader.addEventListener(LOAD_END_STATE, onLoadEnd, false);
                        reader.readAsArrayBuffer(response.getMessageBody());
                        break;
                    case DOCUMENT:
                    case JSON:
                        this.notifyContentHandler({
                            state: type,
                            contentType: contentType,
                            content: this.content
                        });
                        break;
                    case TEXT:
                    default:
                        this.notifyContentHandler({
                            state: type,
                            contentType: contentType,
                            content: new StringReader(response)
                        });
                        break;
                }
                this.streaming = STREAM_CLOSE;
            } else {
                this.notifyContentHandler({
                    state: type,
                    contentType: contentType,
                    content: response
                });
            }
        } else {
            this.content = null;
            if (type === ABORT_STATE ||
                type === TIMEOUT_STATE) {
                this.notifyContentHandler({
                    state: type,
                    contentType: null,
                    content: response
                });
            } else if (type === ERROR_STATE) {
                this.notifyContentHandler({
                    state: type,
                    contentType: null,
                    content: response
                });
            } else {
                if (type === LOAD_START_STATE ||
                    type === PROGRESS_STATE ||
                    type === LOAD_STATE) {
                    this.notifyContentHandler({
                        state: type,
                        contentType: null,
                        content: response
                    });
                }
            }
        }
    }

    openConnection({
        method = GET,
        overridedMimeTypes = null,
        headers = {},
        body = null,
        responseType = UNKNOWN,
        timeout = 0,
        withTimestamp = false,
        withCredentials = false,
        withCache = false,
        failedOnce = false,
        ifModifiedSince = 0,
        withRestrictedHeaders = true,
        maxRetry = 0,
        contentHandler = null
    } = {}) {
        return this.handler.openConnection(this, {
            method,
            overridedMimeTypes,
            headers,
            body,
            responseType,
            timeout,
            withTimestamp,
            withCredentials,
            withCache,
            failedOnce,
            ifModifiedSince,
            withRestrictedHeaders,
            maxRetry,
            contentHandler
        });
    }

    openStream({
        method = GET,
        overridedMimeTypes = null,
        headers = {},
        body = null,
        responseType = UNKNOWN,
        timeout = 0,
        withTimestamp = false,
        withCredentials = false,
        withCache = false,
        failedOnce = false,
        ifModifiedSince = 0,
        withRestrictedHeaders = true,
        maxRetry = 0,
        contentHandler = null
    } = {}) {
        let connection = this.openConnection({
            method,
            overridedMimeTypes,
            headers,
            body,
            responseType,
            timeout,
            withTimestamp,
            withCredentials,
            withCache,
            failedOnce,
            ifModifiedSince,
            withRestrictedHeaders,
            maxRetry,
            contentHandler
        });
        return this.handler.openStream(this, connection);
    }

    static revokeDOMObjectURL(objectURL) {
        URL.revokeObjectURL(objectURL);
    }

    sameFile(other) {
        return this.handler.sameFile(this, other);
    }

    set({
        protocol = null,
        host = null,
        port = null,
        userInfo = null,
        file = null,
        path = null,
        query = null,
        ref = null
    } = {}) {
        if (path !== null) {
            this.protocol = protocol;
            this.host = host;
            this.port = port;
            this.file = query !== null ? path : path + "?" + query;
            this.userInfo = userInfo;
            this.path = path;
            this.fragment = ref;
            this.hostAddress = null;
            this.query = query;
            this.authority = authority;
        } else {
            this.protocol = protocol;
            this.host = host;
            this.authority = port === -1 ? host : host + ":" + port;
            this.port = port;
            this.file = file;
            this.fragment = ref;
            this.hostAddress = null;
            let q = file !== null ? file.lastIndexOf('?') : -1;
            if (q !== -1) {
                this.query = file.substring(q + 1);
                this.path = file.substring(0, q);
            } else {
                this.path = file || null;
            }
        }
        this.h = -1;
    }

    static setUrlStreamHandlerFactory(fac) {
        if (FACTORY !== null) {
            throw new URIError("factory already defined");
        }
        let h = new UrlStreamHandler();
        HANDLERS = {
            "http" : h,
            "https" : h,
            "file" : h
        };
        return FACTORY = fac || new UrlStreamHandlerFactory();
    }

    toDOMUrl() {
        return Url.createDOMURL(this.toExternalForm());
    }

    toExternalForm() {
        return this.handler.toExternalForm(this);
    }

    toString() {
        return this.toExternalForm();
    }
}

let CONTENT_HANDLER_FACTORY = null;

const CONTENT_HANDLER = {};

export class UrlContentHandlerFactory {

    constructor() {

    }

    getContentHandler(mimetype) {
        return CONTENT_HANDLER[mimetype];
    }

    mapContentHandler(mimetype, contentHandler) {
        CONTENT_HANDLER[mimetype] = contentHandler;
    }

    static getInstance() {
        if (CONTENT_HANDLER_FACTORY === null) {
            CONTENT_HANDLER_FACTORY = new UrlContentHandlerFactory();
        }
        return CONTENT_HANDLER_FACTORY;
    }
}

export class UrlStreamHandler {

    constructor() {

    }

    equalsUrl(u1, u2) {
        let ref1 = u1.getFragment(), ref2 = u2.getFragment();
        return (ref1 === ref2 || (ref1 !== null && ref1 === ref2)) && this.sameFile(u1, u2);
    }

    getDefaultPort() {
        return -1;
    }

    getHostAddress(u) {
        if (u.hostAddress !== null) {
            return u.hostAddress;
        }
        let host = u.getHost();
        if (host === null || host === "") {
            return null;
        } else {
            // u.hostAddress = InetAddress.getByName(host);
        }
        return u.hostAddress;
    }

    hashCodeUrl(u) {
        let h = 0, protocol = u.getProtocol();
        if (protocol !== null) {
            h += protocol.length * 31;
        }
        let addr = this.getHostAddress(u);
        if (addr !== null) {
            h += addr.length * 31;
        } else {
            let host = u.getHost();
            if (host !== null) {
                h += host.toLowerCase().length * 31;
            }
            let file = u.getFile();
            if (file !== null) {
                h += file.length * 31;
            }
            if (u.getPort() === -1) {
                h += this.getDefaultPort();
            } else {
                h += u.getPort();
            }
            let ref = u.getFragment();
            if (ref !== null) {
                h += ref.length * 31;
            }
        }
        return h;
    }

    hostsEqual(u1, u2) {
        let a1 = this.getHostAddress(u1), a2 = this.getHostAddress(u2);
        if (a1 !== null && a2 !== null) {
            return a1 === a2;
        } else if (u1.getHost() !== null &&
            u2.getHost() !== null) {
            return char.equalsIgnoreCase(u1.getHost(), u2.getHost());
        }
        return u1.getHost() === null && u2.getHost() === null;
    }

    static isIPv6LiteralAddress(address = '') {
        return (/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
            .test(address));
    }

    openConnection(url, {
        method = GET,
        overridedMimeTypes = null,
        headers = {},
        body = null,
        responseType = UNKNOWN,
        timeout = 0,
        withTimestamp = false,
        withCredentials = false,
        withCache = false,
        failedOnce = false,
        ifModifiedSince = 0,
        withRestrictedHeaders = true,
        maxRetry = 0,
        contentHandler = null
    } = {}) {
        let options = {
            method,
            overridedMimeTypes,
            headers,
            body,
            responseType,
            timeout,
            withTimestamp,
            withCredentials,
            withCache,
            failedOnce,
            ifModifiedSince,
            withRestrictedHeaders,
            maxRetry
        };
        let userInfo = url.getUserInfo();
        if (userInfo !== null) {
            let parts = userInfo.split(":");
            options.user = parts[0];
            options.password = parts[1];
        }
        options.url = url.toString();
        if (contentHandler !== null) {
            url.mUrlContentHandler = contentHandler;
        }
        let connection = new HTTPConnection(options);
        connection.addListener(url);
        connection.open();
        return connection;
    }

    openStream(url, connection) {
        url.streaming = STREAM_OPEN;
        if (!connection.isConnected()) {
            connection.open();
        }
        return connection;
    }

    parseUrl(u, spec, start, limit) {
        let protocol = u.getProtocol(),
            authority = u.getAuthority(),
            userInfo = u.getUserInfo(),
            host = u.getHost(),
            port = u.getPort(),
            path = u.getPath(),
            query = u.getQuery(),
            ref = u.getFragment(),
            isRelPath = false,
            queryOnly = false,
            seperator,
            ind = -1,
            nhost,
            i = 0;
        if (start < limit) {
            let queryStart = spec.indexOf('?');
            queryOnly = queryStart === start;
            if ((queryStart !== -1) && (queryStart < limit)) {
                ind = queryStart + 1;
                query = spec.substring(ind, ind + limit);
                if (limit > queryStart) {
                    limit = queryStart;
                }
                spec = spec.substring(0, queryStart);
            }
        }
        let isUNCName = (start <= limit - 4)
            && (spec.charAt(start) === '/')
            && (spec.charAt(start + 1) === '/')
            && (spec.charAt(start + 2) === '/')
            && (spec.charAt(start + 3) === '/');
        if (!isUNCName && (start <= limit - 2)
            && (spec.charAt(start) === '/')
            && (spec.charAt(start + 1) === '/')) {
            start += 2;
            i = char.indexOf(spec, '/', start);
            if (i < 0) {
                i = char.indexOf(spec, '?', start);
                if (i < 0) {
                    i = limit;
                }
            }
            host = authority = spec.substring(start, start + i);
            ind = authority.indexOf('@');
            if (ind !== -1) {
                userInfo = authority.substring(0, ind);
                host = authority.substring(ind + 1, authority.length);
            } else {
                userInfo = null;
            }
            if (host !== null) {
                if (host.length > 0 && (host.charAt(0) === '[')) {
                    if ((ind = host.indexOf(']')) > 2) {
                        nhost = host;
                        host = nhost.substring(0, ind + 1);
                        if (!UrlStreamHandler.isIPv6LiteralAddress(host.substring(1, ind + 1))) {
                            throw new URIError("IllegalArgumentException Invalid host: " + host);
                        }
                        port = -1;
                        if (nhost.length > ind + 1) {
                            if (nhost.charAt(ind + 1) === ':') {
                                ++ind;
                                if (nhost.length > (ind + 1)) {
                                    port = parseInt(nhost.substring(ind + 1, nhost.length));
                                }
                            } else {
                                throw new URIError("IllegalArgumentException Invalid authority field: " + authority);
                            }
                        }
                    } else {
                        throw new URIError("IllegalArgumentException Invalid authority field: " + authority);
                    }
                } else {
                    ind = host.indexOf(':');
                    port = -1;
                    if (ind >= 0) {
                        if (host.length > (ind + 1)) {
                            port = parseInt(host.substring(ind + 1, host.length));
                        }
                        host = host.substring(0, ind);
                    }
                }
            } else {
                host = "";
            }
            if (port < -1) {
                throw new URIError("IllegalArgumentException Invalid port number :" + port);
            }
            start = i;
            if (authority !== null && authority.length > 0) {
                path = "";
            }
        }
        if (host === null) {
            host = "";
        }
        if (start < limit) {
            ind = spec.indexOf(authority);
            if (ind !== -1 && spec.charAt(ind + start) === '/') {
                path = spec.substring(ind + start, limit);
            } else if (path !== null && path.length > 0) {
                isRelPath = true;
                ind = path.lastIndexOf('/');
                seperator = "";
                if (ind === -1 && authority !== null) {
                    seperator = "/";
                }
                path = path.substring(0, ind + 1) + seperator + spec.substring(start, start + limit);
            } else {
                seperator = authority !== null && authority.length > 0 ? "/" : "";
                if (/file/.test(protocol)) {
                    start = 7;
                }
                path = seperator + spec.substring(start, start + limit);
            }
        } else if (queryOnly && path !== null) {
            ind = path.lastIndexOf('/');
            if (ind < 0) {
                ind = 0;
            }
            path = path.substring(0, ind) + "/";
        }
        if (path === null) {
            path = "";
        }
        if (isRelPath) {
            while ((i = path.indexOf("/./")) >= 0) {
                path = path.substring(0, i) + path.substring(i + 2, path.length);
            }
            i = 0;
            while ((i = char.indexOf(path, "/../", i)) >= 0) {
                if (i > 0 &&
                    (limit = path.lastIndexOf('/', i - 1)) >= 0 &&
                    (char.indexOf(path, "/../", limit) !== 0)) {
                    path = path.substring(0, limit) + path.substring(i + 3, path.length);
                    i = 0;
                } else {
                    i = i + 3;
                }
            }
            while (char.endsWith(path, "/..")) {
                i = path.indexOf("/..");
                if ((limit = char.lastIndexOf(path, '/', i - 1)) >= 0) {
                    path = path.substring(0, limit + 1);
                } else {
                    break;
                }
            }
            if (char.startsWith(path, "./") && path.length > 2) {
                path = path.substring(2, path.length);
            }
            if (char.endsWith(path, "/.")) {
                path = path.substring(0, path.length - 1);
            }
        }
        this.setUrl({
            context : u,
            protocol,
            host,
            port,
            authority,
            userInfo,
            path,
            query,
            ref
        });
    }

    parseFileName(path) {
        let parts = path.match(/([^/])+/g);
        if (parts !== null && parts.length > 0) {
            return parts[parts.length - 1];
        }
        return "";
    }

    sameFile(u1, u2) {
        if (!((u1.getProtocol() === u2.getProtocol()) ||
            (u1.getProtocol() !== null &&
            char.equalsIgnoreCase(u1.getProtocol(), u2.getProtocol())))) {
            return false;
        }
        if (!(u1.getFile() === u2.getFile() || (u1.getFile() !== null &&
            u1.getFile() === u2.getFile()))) {
            return false;
        }
        let port1, port2;
        port1 = (u1.getPort() !== -1) ? u1.getPort()
            : u1.handler.getDefaultPort();
        port2 = (u2.getPort() !== -1) ? u2.getPort()
            : u2.handler.getDefaultPort();
        if (port1 !== port2) {
            return false;
        }
        if (!this.hostsEqual(u1, u2)) {
            return false;
        }
        return true;
    }

    setUrl({ context = null, protocol = null, host = null, port = null, authority = null, userInfo = null, path = null, query = null, file = null, ref = null} = {}) {
        if (file !== null) {
            if (host !== null && host.length !== 0) {
                authority = (port === -1) ? host : host + ":" + port;
                let at = host.lastIndexOf('@');
                if (at !== -1) {
                    userInfo = host.substring(0, at);
                    host = host.substring(at + 1);
                }
                let q = file.lastIndexOf('?');
                if (q !== -1) {
                    query = file.substring(q + 1);
                    path = file.substring(0, q);
                } else {
                    path = file;
                }
            }
            this.setUrl({
                context,
                protocol,
                host,
                port,
                authority,
                userInfo,
                path,
                query,
                ref
            });
        } else {
            if (this !== context.handler) {
                throw new URIError(
                    "SecurityException handler for Url different from "
                    + "this handler");
            }
            context.set({
                protocol : context.getProtocol(),
                host,
                port,
                authority,
                userInfo,
                path,
                query,
                ref
            });
        }

    }

    toExternalForm(u) {
        let len = u.getProtocol().length + 1;
        if (u.getAuthority() !== null && u.getAuthority().length > 0) {
            len += 2 + u.getAuthority().length;
        }
        if (u.getPath() !== null) {
            len += u.getPath().length;
        }
        if (u.getQuery() !== null) {
            len += 1 + u.getQuery().length;
        }
        if (u.getRef() !== null) {
            len += 1 + u.getRef().length;
        }
        let result = "";
        result += u.getProtocol();
        result += ":";
        if ((u.getAuthority() !== null && u.getAuthority().length > 0) ||
            /file/.test(u.getProtocol())) {
            result += "//";
            result += u.getAuthority();
        }
        if (u.getPath() !== null) {
            result += u.getPath();
        }
        if (u.getQuery() !== null) {
            result += '?';
            result += u.getQuery();
        }
        if (u.getRef() !== null) {
            result += "#";
            result += u.getRef();
        }
        return result;
    }

    toString() {
        return "[object UrlStreamHandler]";
    }
}

