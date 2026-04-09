var DSP_KULUPU_LA = NewDnsProvider("kulupula_porkbun");
var REG_KULUPU_LA = NewRegistrar("kulupula_porkbun");

// kulupu.la
D("kulupu.la", REG_KULUPU_LA, DnsProvider(DSP_KULUPU_LA),
    DefaultTTL(600),
    A("@", "46.23.81.157"), // lipu Sourcehut
    AAAA("@", "2a03:6000:1813:1337::157"), // lipu Sourcehut
    CNAME("www", "@"), // o pona e nasin WWW

    // ilo Purelymail
    MX("@", 0, "mailserver.purelymail.com."),
    CNAME("purelymail1._domainkey.kulupu.la.", "key1.dkimroot.purelymail.com."),
    CNAME("purelymail2._domainkey.kulupu.la.", "key2.dkimroot.purelymail.com."),
    CNAME("purelymail3._domainkey.kulupu.la.", "key3.dkimroot.purelymail.com."),
    CNAME("_dmarc.kulupu.la.", "dmarcroot.purelymail.com."),
    TXT("@", "purelymail_ownership_proof=b459e5f97d39acafb4b7f8249cf21e98f46e16d445c7d86bb22af1a9f00a91a2a33467efab26eed13b34697eaafeafe770cba18618bf1b5b7284b5465a146b0a"),
    TXT("@", "v=spf1 include:_spf.purelymail.com ~all")
)
