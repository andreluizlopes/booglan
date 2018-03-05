import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getPrepositions, getVerbs, getVocabulary, getNumbers } from './helpers/booglanRules';
import { textA, textB } from './helpers/texts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('getPrepositions', () => {
  it ('get prepositions', () => {
    const prepositions = getPrepositions(textA);

    expect(prepositions.length).toEqual(49);
  });

  it ('get 3 random prepositions', () => {
    const textRandom = 'pwz fdrbn nxprpq crpmz grlqvpr pzxvb jfcv wvbnq xwkxr ggvfqgl ';
    const prepositions = getPrepositions(textRandom);

    expect(prepositions.length).toEqual(3);
  });

  it ('empty prepositions', () => {
    const textRandom = "";
    const prepositions = getPrepositions(textRandom);

    expect(prepositions.length).toEqual(0);
  });
});

describe('getVerbs', () => {
  it('get textA verbs', () => {
    const prepositions = getVerbs(textA);

    expect(prepositions.verbs.length).toEqual(71);
  });

  it('get textA subjunctive verbs', () => {
    const prepositions = getVerbs(textA);

    expect(prepositions.subjunctiveVerbs.length).toEqual(58);
  });

  it('get random verbs', () => {
      const textRandom = 'crscbznr cxwdzlxk lffhzpgc mvpsmmpg grlqvpr pzxvb jfcv wvbnq xwkxr ggvfqgl ';
      const verbs = getVerbs(textRandom);

      expect(verbs.verbs.length).toEqual(2);
  });
});

describe('getVocabulary', () => {
  it('get textA vocabulary', () => {
    const vocabulary = getVocabulary(textA);

    expect(vocabulary.join(' ')).toEqual('ttwhsrg ttjp twvk thh thlcnb tzzrlh tzdrgpm tzcx tkzq tfksgrjx tfpr tvldqdl tvqk tcv tcn tjh tjnd tjgsrz tld tlfd tlqnzds tlbd trf trv tnxn tqm tmhpj tmjzvn tpcccd tsmv tsgfclj tbc tbl wtf wtffzw wtfgn whtpldh whqn whg wkr wksx wfv wvbnq wjtvr wjkmlgbj wjdh wjjkbjn wxfgf wxxpg wxnthr wlfvqb wrbzfkbt wndvc wqbknxwc wmhxmmjg wmzqhf wsn wbcvxcdl wbjj wbq hthzrktj hthpzcq htlj htqlk htqgktlf hwhfgsvg hwmdxv hhvjsgkr hzdnsb hzlvdfhw hzrrx hzqjwkzb hkvgnn hkgz hdhrql hfczm hfr hvdjlm hjk hlkqcz hrlphwt hnh hqcv hqqn hmz hml hgz hgq hphw hpmwbs hsk hsff hsvmlv hbv hbxlb hbgwtpgd ztcbglxj zwzc zwsqjbp zzk zkk zkbx zdtqrc zdkpfl zdgtjp zdglcx zfwrk zfvq zvxt zvr zlqxzs zlbhtkq zrhpwck zrgssm znkpjh zndrbns zncvspg zqmkj zmjzcszn zgffvvj zgn zptpt zpklqhq zplqhqj zpslsgr zpbdfn zsbr zbkskbt zblsrsqb ktvdb kwwpjcw khd khjk khjcxjb khnnv kzkl kzfpz kzc kdtcgmj kdztr kdllrrl kdrqdp kdsgjhp kvfrdt kvxvjlsw kvlzvkm kvnvhrt kvng kcwr kjtljzgq kjhpkc kjnv kxrpl kxp kngjl kqq kqspjsq kmtdvnx kmfhlvfx kpzqwk ksdxh kbw kbvkhct dtkh dhxlhcd dzt dzdfg dzbjc ddt ddjbq dfztff dfqrd dvqsmjjf dctzmmg djx djsn dxrxrhwv dxplf dljgjlt drmb dmkvqc dmddhsk dswh dsctrbf dsp dbtx dbkvc dbpvxzj ftcxbv ftgr fwgqxl fwscncn fzfs fzphplvn fkf fkc fdrbn ffktjhqv ffs fvh fvvsrw fvrltlr fcdxdb fcxm fcp fjkc fjjlpbk fltlw frzxbzb frqfs fngmrcts fqnbw fqsnbvkd fmmrwn fgqv fpgcrdtt fbzsls vtcttzdz vwmprznl vzzk vzkhz vzj vktglnvt vkzthz vkddtgd vdtdhjgs vdfwm vfnjlksd vvpnspkm vckfhfh vcc vjkf vjjttfb vxr vxm vljlqwr vlq vrwnspc vrpxqlcv vnd vmrb vmm vgdjr vgbl vph ctx chhb ckkscz cdwx cdwmhs cftt cfg cvqbcpw cctvz ccwptf ccjsqw cjw cjwdc cxwdzlxk cxvnb crkqfgm crrkmcb crp crpmz cnjrgphz cmhsggfh cgsczs cpwp cpx csw csdqcl csvf csrnm cbqnrtfb cbsnch jtpxn jwdvcghd jhhfbd jhxtm jzfhknfg jzqph jzsbq jkd jkn jfcv jfjlwtdm jfp jvvzgr jccxzzkj jjtxqqhc jrkjljdp jrdhrjgn jrjt jrjrqzs jrxjjnml jnn jnpmn jnshvb jnsdxrq jqwmdmp jqkxw jqss jmtgfc jshqtfx jskknvr jsmqs jbkgqvpp jbxrl xtc xtpqq xwkxr xhpsx xzcm xkwdbdt xkqxcwpm xdcdrvqb xdrbsmwn xfhnnfjc xfnjp xfbqlr xxr xrwgc xrstlrsx xngbwczg xqjrz xmd xmfb xmnc xmgv xmgmpjz xpt xstx xsmzvr xbzj ltnpw ltslrg lwpl lhzdc lhccqf lzngjzkt lzstlwf lkt lkcbft lkgf ldssvhhr lftklg lfhrm lffhzpgc lfc lvnfj lvgprg ljxg ljswczsj ljbqg lxkvnf lxfwv llwgm lll llpzw lrl lqhrffq lqz lqzpkgq lqfl lqrpffs lqnnk lgnxnn lprk lsgxbwvd lsbp lbw lbrvz lbbjx rtpf rtpffmcf rwrzrk rhhgjbkp rhp rzjt rdtttss rvtfn rvfc rvvvbs rvvjppt rvqsnl rvs rvsgkn rczxz rcfghng rcvnpqnh rxpb rlcccs rnst rqdrrttj rqvnt rgzlprq rgpr rgbpwbf rpfncgz rplndz rsxmcdc rslpwdrk rspfv ntrmhf nwxfndmr nwrlww nwnpl nwbtpm nhtbksv nhnrfdfp nzhvvnw nzbhbxlf nkwvdzb nkksnrf ndtzg ndzs nddfdz nfw nfrqmv ncnw njhblnrr nxzwfvxf nxmj nxprpq nlsxf nrkprhx nnnlvnfq nqkrm ngqmbvgw npz nbnkdt qtrvrgdh qtbmp qwdtfkt qwszsw qkcwv qkr qddnj qflzwj qjk qjqdpwdh qxt qxwcb qxqzqtl qlpjkhmm qrf qnkjnqj qqg qqgcx qgd qptblxz qsxfl qbhgfjc qbjtlptx mhq mhsbf mzz mzntdhv mzb mdhw mdvvc mdjwn mfh mfsx mfbhfnzr mvpsmmpg mcfbpg mcxr mcn mjt mjnt mjngwf mjmb mxdwmx mxfkqn mxrr mxnr mltwsr mlcsfnp mrs mnk mnmqt mqtf mqg mqgsl mmkrjpcz mmfltjw mgdqqv mbjkk mbrnl gtwdzvbd gtnmldrf gwlc gzfx gzq gkpxvzbg gdfm gdvnpk gdmz gdskzkkr gvrng gckgnvwh gcksvmk gllhcp grlqvpr grgkkfwq grbrpfk gnnrrh gnsmbtb gqqrbcmh ggvfqgl ggbsdvf gpwxfgd gphrwt gpvckw gpgrzsk gppm gsqtch gbgfsj gbbzhn ptrwhm ptprwvwh pwz phtrdg phd pzxvb pklnkt pdkphhrn pfnmqd pfsg pcc pcq pjhbcg pjsfrw pxwkcpkm pxq plqj prwnkmgf pqjjjx pgwt pgjwwdjh pgllk pprvqcw pprsz psjwr pspb pbfwwvph pbblcm swrbr shwdrhq szdwqjn sdqbl sfnc sfqh svn scntx scgkccbc sjcg sjszpglq slfqkxlc slvjqxtb snlwvf sqsn smwxhlw smhq smcftxv sgt spt spdvqfb spmcmpls sppltgqq sskdpzk sbjmtmrc sblhr sbbszwrh bhw bhhfwgn bzrjt bzbfsjpd bkjtgsv bdvdgsdg bdlr bcnfbb bcgc bxwkd blnsnhgf brlnh bnpbjz bnbtzlf bqwcc bqvn bqlwwrn bmqxxc bgzkr bgpc bpqjwzq bsthm bsgfrzb bbrndmp bbrmrr');
  });

  it('get random text vocabulary', () => {
    const textRandom = 'crscbznr cxwdzlxk lffhzpgc mvpsmmpg grlqvpr pzxvb jfcv wvbnq xwkxr ggvfqgl';
    const vocabulary = getVocabulary(textRandom);

    expect(vocabulary.join(' ')).toEqual('wvbnq cxwdzlxk crscbznr jfcv xwkxr lffhzpgc mvpsmmpg grlqvpr ggvfqgl pzxvb');
  });
});

describe('getPrettyNumbers', () => {
  it('get pretty numbers textA', () => {
    const prettyNumbers = getNumbers(textA);

    expect(prettyNumbers.length).toEqual(140);
  });

  it('get random pretty numbers', () => {
    const textRandom = 'crscbznr cxwdzlxk lffhzpgc mvpsmmpg grlqvpr pzxvb jfcv wvbnq xwkxr ggvfqgl';
    const prettyNumbers = getNumbers(textRandom);

    expect(prettyNumbers.length).toEqual(4);
  });

  it('get number Booglan word vqxtz', () => {
    const textRandom = 'vqxtz';
    const prettyNumbers = getNumbers(textRandom);

    expect(prettyNumbers).toEqual([484287]);
  });

  it('get 2 equal numbers', () => {
    const textRandom = 'vqxtz vqxtz';
    const prettyNumbers = getNumbers(textRandom);

    expect(prettyNumbers).toEqual([484287]);
  });

});
