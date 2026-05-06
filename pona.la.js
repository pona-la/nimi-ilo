var DSP_PONA_LA = NewDnsProvider("ponala_porkbun");
var REG_PONA_LA = NewRegistrar("ponala_porkbun");

// NASIN PI LIPU NI LA:
// - lipu li kipisi lon nasin ni: ijo nimi li pali ante, li ken jo e lawa ante, la kipisi sin.
// - o nasin e kipisi kepeken nasin pi sitelen Lasina.
// - kipisi ale la toki o lon sewi kipisi o toki e ni: seme li lawa e nimi ni.

// nimi suli pona.la
// lawa li kulupu https://github.com/pona-la
D("pona.la", REG_PONA_LA, DnsProvider(DSP_PONA_LA),
    DefaultTTL(600),
    A("@", "185.199.108.153"),
    A("@", "185.199.109.153"),
    A("@", "185.199.110.153"),
    A("@", "185.199.111.153"),
    AAAA("@", "2606:50c0:8000::153"),
    AAAA("@", "2606:50c0:8001::153"),
    AAAA("@", "2606:50c0:8002::153"),
    AAAA("@", "2606:50c0:8003::153"),
    ALIAS("@", "pona-la.github.io."),
    CNAME("www", "pona-la.github.io."),

    TXT("@", "google-site-verification=qVqD07LaVt2BW6SYC0nhxewPMDPE4YE3GK1Afu1AO6A"),
    TXT("_github-challenge-pona-la", "753989082a"),
    TXT("netlify-challenge", "VmF1Af4xSYK2GrwcmhSz0"),

    MX("@", 1, "fwd2.porkbun.com."),
    MX("@", 1, "fwd1.porkbun.com."),
    TXT("@", "v=spf1 mx a include:_spf.porkbun.com ~all"),
);

// poki nimi li.pona.la li tawa nimi jan. jan ale li ken lon e lipu ona lon ni.
D_EXTEND("li.pona.la",
    // janpa.li.pona.la
    // lawa li jan Janpa Onjon @yangpa-onyon
    ALIAS("janpa", "d3r0dyr2vneqsj.cloudfront.net."),
    CNAME("_48393d33bf83095853bab96231804202.janpa", "_ba436144a16186363625b310305e2d4d.djqtsrsxkq.acm-validations.aws."),

    // sijeni.li.pona.la
    // lawa li soko Sijeni @ivaaane
    CNAME("sijeni", "ivaaane.github.io."),

    // kala-asi.li.pona.la
    // lawa li kala Asi @AcipenserSturio
    CNAME("kala-asi", "acipensersturio.github.io."),
    TXT("_atproto.kala-asi", "did=did:plc:qocllhtb6pc774sz3m2lo4zb"),

    // kala.li.pona.la
    // lawa li kala pona Tonju @bucketfish
    CNAME("kala", "bucketfish.github.io."),

    // jan-luna-wani.li.pona.la
    // lawa li jan Luna Wani @quanttum1
    CNAME("jan-luna-wani", "quanttum1.github.io."),
    TXT("_discord.jan-luna-wani", "dh=7e662cbb40a95007e882b44aeb3008f9dae20d71")
);

// alasa.pona.la
// lawa li seme?
D_EXTEND("alasa.pona.la", A("@", "45.61.187.3"));

// ilo-sona.pona.la
// lawa li seme?
D_EXTEND("ilo-sona.pona.la", CNAME("@", "milkcool.hackclub.app."));

// lipu.pona.la
// lawa li https://github.com/kulupu-lapo
D_EXTEND("pona.la",
    CNAME("api.lapo", "lapo-backend.pages.dev."),
    CNAME("lipu", "kulupu-lapo.github.io."),
);

// lipu-pi-ijo-pi-toki.pona.la
// lawa li kule epiku Atawan @theepicosity
D_EXTEND("lipu-pi-ijo-pi-toki.pona.la", CNAME("@", "theepicosity.github.io."));

// lipu-sona.pona.la
// lawa li lawa pi poki https://github.com/pona-la/lipu-sona
D_EXTEND("lipu-sona.pona.la", CNAME("@", "pona-la.github.io."));

// luka.pona.la
// lawa li jan Tepo @tbodt
D_EXTEND("luka.pona.la", CNAME("@", "tbodt.github.io."));

// kemeka.pona.la
// lawa li kala Asi @AcipenserSturio
D_EXTEND("kemeka.pona.la", CNAME("@", "pona-la.github.io."));

// kukole.pona.la
// lawa li jan Mika @Mikarific
D_EXTEND("kukole.pona.la", A("@", "144.126.142.10"));

// kulupu.pona.la
// lawa li nano
D_EXTEND("kulupu.pona.la",
    A("@", "15.204.56.224"),
    TXT("@", "google-site-verification=PTRAghqlrUXfUcMTNAfWhxnjbvCC9uC8h3AO7IMGopQ"),
    MX("@", 10, "inbound-smtp.us-west-2.amazonaws.com."),
    MX("mail", 10, "feedback-smtp.us-west-2.amazonses.com."),
    TXT("mail", "\"v=spf1 include:amazonses.com ~all\""),
    CNAME("2gapib7p53dcet744tfvhskiz43k7iqb._domainkey", "2gapib7p53dcet744tfvhskiz43k7iqb.dkim.amazonses.com."),
    CNAME("zudazlqgqbw3fglp3enb2cagcsai3cvk._domainkey", "zudazlqgqbw3fglp3enb2cagcsai3cvk.dkim.amazonses.com."),
    CNAME("aeekt5unzcfqdk22jvv2vo7opfn5d67h._domainkey", "aeekt5unzcfqdk22jvv2vo7opfn5d67h.dkim.amazonses.com."),
);

// kute.pona.la
// lawa li ilo Sasi li kala Asi
D_EXTEND("kute.pona.la",
    A("@", "51.83.68.149"),
    AAAA("@", "2001:41d0:305:2100::1eee"),
);

// linku.pona.la
// lawa li kulupu https://github.com/lipu-linku
D_EXTEND("linku.pona.la", CNAME("@", "lipu-linku.github.io."));

// ma.pona.la
// lawa li poki https://github.com/pona-la/ma.pona.la
D_EXTEND("ma.pona.la", CNAME("@", "pona-la.github.io."));

// mi.pona.la
// lawa li jan Nikolasu
D_EXTEND("mi.pona.la",
    ALIAS("@", "id.nikolas.dy.fi."),
    
    MX("@", 10, "mail.osphost.net."),
    TXT("202603e._domainkey", "v=DKIM1; k=ed25519; h=sha256; p=R1spuZdVKHSK56NAnSBV2Y5xmUTzplvVfDXpeVGSnwE="),
    TXT("202603r._domainkey", 'v=DKIM1; k=rsa; h=sha256; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA79iGhiBwdtuKxouXu2NWTGCSZnffMB2OGrjTnPvDootTMWnoTPwgCJYHlH2EMNkU9guluVdvlPZa+jIGyG0Cur5MGcgjnyGRAaBC1MthX13R1V8xoweCBwjZsQDDJSYa7CmF6OU18FlsbP3DWv0Gg1Lg7Dgny/VWIaqAZJrsOgLDaYF7791wd3E1WCdPTVMbxaMzPg3TA0/yUmsoKfDccnZWKSnU3K1NgEm7EL5JFd2TrUrbJ6PqJ0KRiQ1GBNT+QV9jgZL0sSjMmHUY1tHZF4xO3HPEA9IwMALo5icgzf8DPDwH/bg2Tx8LU1F7SSYhugY80j0QpCZXO9kaHzLOQwIDAQAB'),
    TXT("@", "v=spf1 mx ra=lawa -all"),
    TXT("_dmarc", "v=DMARC1; p=reject; rua=mailto:lawa@mi.pona.la; ruf=mailto:lawa@mi.pona.la"),
    TXT("_smtp._tls", "v=TLSRPTv1; rua=mailto:lawa@mi.pona.la"),
);

// mutenpo.pona.la
// lawa li jan @mynameisashllee
D_EXTEND("mutenpo.pona.la", CNAME("@", "mynameisashllee.github.io."));

// nasi.pona.la
// lawa li jan Kepe @kepexx
D_EXTEND("nasi.pona.la",
    TXT("_gitlab-pages-verification-code", "gitlab-pages-verification-code=b3dc7b1f807cd3a3473cbc43e387943a"),
    ALIAS("@", "kepexx.gitlab.io."),
);

// nimi.pona.la
// lawa li poki https://github.com/pona-la/nimi
D_EXTEND("nimi.pona.la", CNAME("@", "pona-la.github.io."));

// nimi-li.pona.la
// lawa li jan Tepo
D_EXTEND("nimi-len.pona.la",
    ALIAS("@", "tbodt.com."),
    TXT("@", "v=spf1 include:mailgun.org ~all"),
    CNAME("pdk1._domainkey", "pdk1._domainkey.c0e6d9.dkim1.us.mgsend.org."),
    CNAME("pdk2._domainkey", "pdk2._domainkey.c0e6d9.dkim1.us.mgsend.org."),
);

// oalasa.pona.la
// lawa li jan Conor, ilo Siko la <@278685537949319168>
D_EXTEND("oalasa.pona.la", CNAME("@", "limitless-nectarine-cfice5xteszacr023mx8tys8.herokudns.com."));

// seka.pona.la
// lawa li jan Kita @hecko-yes
D_EXTEND("seka.pona.la",
    A("@", "45.61.187.3"),
    TXT("@", "v=spf1 include:spf.mailjet.com ?all"),
    TXT("mailjet._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCogWmZM3YEO3A3CjRJLTCTzlb1eb+3VP78du00wgk3N307fq6WSy3GhJtjxEonTu7NYUGdU9dcM3xMak69YH8uezRHz/2m/40oSsfC4rhgMoeBd0dnBFP7cn4a8LwQiNHkYT96yeRHIBeh4JDyfIgQuV1mNPrjIK9mvK8VF0o27wIDAQAB"),
);

// selo.pona.la
// lawa li poki https://github.com/pona-la/selo
D_EXTEND("selo.pona.la", CNAME("@", "pona-la.github.io."));

// sike.pona.la
// lawa li poki https://github.com/pona-la/sike
D_EXTEND("sike.pona.la", CNAME("@", "pona-la.github.io."));

// sin-kulupu.pona.la
// lawa li poki https://github.com/pona-la/sin-kulupu
D_EXTEND("sin-kulupu.pona.la", CNAME("@", "pona-la.github.io."));

// sitelen.pona.la
// lawa li poki https://github.com/pona-la/sitelen-pona-la
D_EXTEND("sitelen.pona.la", CNAME("@", "pona-la.github.io."));

// sona.pona.la
// lawa li kulupu pali pi lipu https://sona.pona.la
D_EXTEND("sona.pona.la", CNAME("@", "mw-lb.miraheze.org."));

// sona-suli.pona.la
// lawa li jan Tepo @tbodt
D_EXTEND("sona-suli.pona.la", A("@", "138.197.53.42"));

// suno.pona.la
// lawa li poki https://github.com/pona-la/suno
D_EXTEND("suno.pona.la", CNAME("@", "pona-la.github.io."));

// sitelen.pona.la
// lawa li poki https://github.com/pona-la/sitelen-pona-la
D_EXTEND("toktok.pona.la", CNAME("@", "hosting.adalo.com."));

// utala.pona.la
// lawa li jan Lakuse @raacz
D_EXTEND("utala.pona.la", CNAME("@", "utala-pona-la.netlify.app."));

// kito.pona.la
// lawa li jan Awekesi li jan Satase
D_EXTEND("kito.pona.la",
    A("@", "152.53.187.69"),
    AAAA("@", "2a0a:4cc0:c1:18b6:389d:5ff:fef8:1396"),
);
