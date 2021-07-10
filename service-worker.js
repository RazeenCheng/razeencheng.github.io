/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","f71b0fd4eee7147bc088c19ed47404d1"],["about/index.html","4b7476933e4cdfc38e420489b2c2ffec"],["archives/2017/03/index.html","afb535584083f9e6ffff213d591a624b"],["archives/2017/08/index.html","ebeb9807215ddda18d85d80244f427f7"],["archives/2017/09/index.html","fb2d02f85fc10bf9931afc96370b9027"],["archives/2017/10/index.html","dd3e537c8ab21fbadc1b395f69d018ee"],["archives/2017/11/index.html","6fcf24d67bd2ed8fd2b56b045176295d"],["archives/2017/12/index.html","29610c2172514adc80a6b9d7a9439320"],["archives/2017/index.html","dcbb37b77f31d7ec20f92ac55b85bf04"],["archives/2017/page/2/index.html","3e7572011a954da44c40ab5e3ceecff4"],["archives/2018/01/index.html","ce6255afc424d38127b76a6350eece69"],["archives/2018/03/index.html","b6fc9dd2efe641e68e2eb893e985d68b"],["archives/2018/04/index.html","b34e871073914c8fb149a08673241505"],["archives/2018/05/index.html","fe624cb5f7739426357ea734c661dec9"],["archives/2018/06/index.html","38b3a8332978de4289f2f692092dbdf1"],["archives/2018/07/index.html","8ee2aef1e856bcff2ec8c8f3af858528"],["archives/2018/08/index.html","459c1a12619ecb4ac8d5f9e07effbef3"],["archives/2018/09/index.html","0e1c5c84f93d72e1d9e55655c5c03c8d"],["archives/2018/10/index.html","428cc7588dd3637e6cd678719b474043"],["archives/2018/11/index.html","4f2bb46125e5f657f7702e175251b561"],["archives/2018/12/index.html","34863a0bbb55f74613a215a00ee4c4be"],["archives/2018/index.html","d3c697007f29cbd1c119640e91c82fe1"],["archives/2018/page/2/index.html","fd926372e2aa8891b62bceb2a508d24a"],["archives/2018/page/3/index.html","63459159671b614df4b961e184aed17b"],["archives/2019/01/index.html","9aa77019eccd67f86a88658e2b799680"],["archives/2019/02/index.html","38ca2f5bbaedb1ca7e2616b13513ad24"],["archives/2019/03/index.html","960ae796d7eb910f6f9636f3078231f8"],["archives/2019/04/index.html","0dc3582912cc8a3a67cc0c0935b79b90"],["archives/2019/05/index.html","842fa663e70a3868e18c156be6e2342b"],["archives/2019/09/index.html","552f816bf0b94331074fddc3239cb1b4"],["archives/2019/12/index.html","544f0524724798c91fdf187e8f7befc2"],["archives/2019/index.html","1f6a3d1d8f6fe387cd1d4f2a5eafa455"],["archives/2020/03/index.html","1f4982c8a851045cf62fb527b5288982"],["archives/2020/04/index.html","d77638392df8240e250757040a8d5c4f"],["archives/2020/08/index.html","07263dd2f856ce10b5afddfcfe50088d"],["archives/2020/index.html","4e63a7e378648ac5d568fc6efc183497"],["archives/2021/01/index.html","ea6c736103b6e618bbdf94aebcd4e34a"],["archives/2021/02/index.html","c7f003cb937f02f1bca11a05546d14cd"],["archives/2021/03/index.html","fbcb3398622e2f6b03534385e6f82213"],["archives/2021/04/index.html","45791441dc6b571c8adf6bc5cc63f8dc"],["archives/2021/06/index.html","600bc48143ca907f7362c3c43511e972"],["archives/2021/07/index.html","40c761c40e301ef98a4802bf0df419d2"],["archives/2021/index.html","d3eff0d4f8666dc021949cea633c349c"],["archives/index.html","d9c67eae15fd38336b205516994f8f92"],["archives/page/2/index.html","68eade922d08cd20317192beabe3e3b1"],["archives/page/3/index.html","afe2ab98b09c2413b85dafffb78cc51b"],["archives/page/4/index.html","6f555fd35393a800cbac9d5d263479ca"],["archives/page/5/index.html","d6b910d8ae909e93efe57bf491c12ed2"],["archives/page/6/index.html","7ce15bec426705440f98747bac0adde8"],["archives/page/7/index.html","77868280c4abd5cce44c7539e91610fc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/about-linux/index.html","751cb0be5b154ddc7103b4ab9137780c"],["categories/cate/index.html","40b76019c70ceea4849485aa42dfc30d"],["categories/default/efficiency/index.html","e816d79bf61c37c77367708f84f533ea"],["categories/default/index.html","464fe9d500e40f934682caa0903ecac8"],["categories/default/what/index.html","19020bbf88d2d6ada5b10db67227e13e"],["categories/dev-daily/dev-tools/index.html","a64833317d951c07af51e26c99bd946a"],["categories/dev-daily/index.html","304fba944a8185b331dfc55bd3b62ddf"],["categories/dev-daily/page/2/index.html","5194f4a303c4d9b5ac4c6282339fec10"],["categories/go-learn/Go基础/index.html","74e21ae4a35ef8b6382350d92a55a1b0"],["categories/go-learn/go-fighting/index.html","19eaa6e1e3d6028d7c462dd268031222"],["categories/go-learn/go-tool/index.html","8cb5d7eee6ca50573088af55c9528778"],["categories/go-learn/grpc/index.html","07e0ed5c406e1068dfaa0321980bc60a"],["categories/go-learn/index.html","004a84961da6fd5745ada56c237f6ad7"],["categories/go-learn/page/2/index.html","5d4a49a6e564a19d6e12be32600a1fd1"],["categories/index.html","79840ea157a6ebef6404ff6a70a7e32f"],["categories/life/baby/index.html","c256fbfa62221bb789de45d0043eec8a"],["categories/life/index.html","5921bbf612b9bfd6ce899b085d7d7646"],["categories/life/running/index.html","d924b590466e264b284b637c01eccc81"],["categories/my-blog/index.html","a720c44a1562608b382fe37ac143a3a0"],["categories/my-home/index.html","474005b2cad0d0988edf9a49ac9d1bca"],["categories/my-home/my-server/index.html","35feb824d0649625503b180aca899854"],["categories/my-home/nas/index.html","1fb4d10799fb5b91cd1eb7985e251643"],["categories/pki-ca-cert/cert/index.html","57423a711d508e36ce76447c113041fb"],["categories/pki-ca-cert/https/index.html","ec9cbc31b6dbeaad5645d8953570ae10"],["categories/pki-ca-cert/index.html","1c1a04059f8345d9f2d12b519950988a"],["categories/pki-ca-cert/pki-ca/index.html","10b5d3bdfa4099f281ad34b6ef1ce9f8"],["css/main.css","7a9efa840d25d642286e37834781d85c"],["domains/index.html","0dcef7a03093a0f983026cc1857dc36e"],["domains/sell/index.html","ac1366528462fd1fab6e2c64b30645d1"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["index.html","b896fcf8580c8c53538b47eead8661cb"],["js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["js/motion.js","e8073e03493feb145528c4bdbe613d70"],["js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["page/10/index.html","028b2c8e3cbf7e7e87467a14797c7b54"],["page/11/index.html","565d86e9b760007ed26bddd99adee0bb"],["page/12/index.html","929b214c8a360db2933ede80574fc1b1"],["page/13/index.html","4226512f19513df1eb8486982c09cdf7"],["page/2/index.html","c098e709f5b22ef03dbdafe63273f5d4"],["page/3/index.html","95452a8107b6c2a12723ec28dc1dde3b"],["page/4/index.html","32a015597f89bd06acbb099ec79259fd"],["page/5/index.html","e153c6e1aee4f6c6178ee7e46b3b7cb4"],["page/6/index.html","e213914df32653e5416cac763a6df80a"],["page/7/index.html","744735b0adea48efc67d2f82fdd59a3f"],["page/8/index.html","5a47657d39407335082c2c5896a69736"],["page/9/index.html","2fa7f992a17c239043c152a72d06124c"],["post/auto-change-network-location-base-on-name-of-wifi.html","3c57015ac7ba4dd594bd251cda358ffe"],["post/blog-migration-hexo-next.html","cb8d586df21a4aba6fadecb120488ff2"],["post/books.html","21b514a2d1a6ee4e1c9b3c2bf71dc46e"],["post/breaking-all-the-rules-using-go-to-call-windows-api.html","b66ae2ab0a2880858b450e2e7be2c87f"],["post/cate-diy-cake.html","6a8c2d5ae89bfd9b5592685711b64fff"],["post/centos-utf-8-warning.html","111bd9d7225b50ef1318bcb8ad8d6d1f"],["post/clean-your-docker.html","cf436e88f08931d900a95838bdbc1984"],["post/conventional-commits-and-standard-version.html","bb88ebce214ca32df5e862f88da1f062"],["post/daily-go-recover.html","43587773e78dea73476c59024f441e73"],["post/daily-hexo-auto-refresh.html","09d9090bb8841387f9caf0a389ac4cf5"],["post/daily-pg-tips.html","fd27ad2d44cc407c8f5b5915aeb6a735"],["post/db-tool-goose.html","f82c2eacb0cec3fba67cd56355bd219b"],["post/detail-of-tls13.html","1f0be4c6e36a6ebd9b410e891c498fec"],["post/disqus-reactions.html","6f3924c0db5e312d6d3a7fbc121ed6a9"],["post/fill-do-degree-graduation-certificate.html","f75d41c849553dcff0ea8a1da3672e9a"],["post/gin-file-down-upload.html","4665fd123bc80dccde61ca2528d011ac"],["post/go-build-vscode-win-env.html","c19961ae96a78c5d4d7b3652f755c42d"],["post/go-how-to-write-benchmark.html","33e6eadad0cd89ef922cd24512a976aa"],["post/go-snippets.html","18a4458b41cc35f6645b7eda4f26fdcf"],["post/go-swagger.html","a8b6ae7ec29d056c8d3c88c6c687982a"],["post/go-timers-life-cycle.html","cd477d69b622841142edef2fef6ced02"],["post/golang-and-git-commit-message-pre-commit.html","64eaabf3bf7d847a9d530c6e2f221756"],["post/golang-and-restful-api.html","b48eb03c0fc450590173f0120401f2f2"],["post/golang-cgo-mac-win-cross-compilation.html","331630253f4bd60a68a189f780df150d"],["post/how-to-install-tshark-on-centos.html","a858cb2323a76908285a6af416e0a98c"],["post/how-to-use-grpc-in-golang-01.html","1fd36bc3e9cc4b4679a8ce2e544c5d09"],["post/how-to-use-grpc-in-golang-02.html","f497bf50856bde89d672c4f62f0c1e96"],["post/how-to-use-grpc-in-golang-03.html","e0a28d89459451c268da7afb401525e8"],["post/https-githubpages.html","8909a2c611ff6dc0a61dde625cc4b008"],["post/introduce-pkcs.html","0214dca97a5aa3dfdc3620b3b465e7e4"],["post/linux-command-line-summary-fopt.html","bbff6ce4f0a8cea5c4d4c8493a50af53"],["post/mime-types-quick-look.html","f6c954c1b84e5d0bf65c7167e50be9a1"],["post/my-first-home-server.html","74d056cd9928f2179e46c1d1857d2b37"],["post/my-first-marathon-01.html","1f5ff32f8b176bc5fa71bdcab3d0d0cf"],["post/my-macvim-vimrc.html","065aff0e7c4e9f1022af53e79a5052a0"],["post/nginx-proxy-problem-with-dns-cache.html","42cf88977eb48629ddcb83c1652c1b3d"],["post/nginx-tls1.3-draft26.html","015e98ba4f1c5513497e03d21707ac23"],["post/oauth2-protocol-details.html","8d09e73aa211e5be0c30646c738bee02"],["post/pg-like-index-optimize.html","d72fe411eea7a83e7e247c94d8b7594b"],["post/postgres-daily.html","ba0c6c4e6375b8c6172fe7c15db5cfbc"],["post/shanghai-kindergarten-policy-2021.html","86b6b29b2d5475c133cb6f7bc9dea426"],["post/shanghai-settltment-record.html","c1ab4fc3c5cd8ad33c0b743e4b33d975"],["post/simple-use-go-exec-command.html","8c9a17ccaffb2eb0b78ec8821fde0add"],["post/ssh-tips.html","c3fb4676276746fb0401ed0a2ffca40b"],["post/ssl-build-certificate-transparency.html","228819750f252e5fc3e6085308b68c00"],["post/ssl-category.html","b50264519c01125ab1615ebd32e357ec"],["post/ssl-handshake-detail.html","bc62bbacc5a1ede2ec7420b07492d894"],["post/start-ipfs-gateway.html","20bb6cd52e4e71ef05a9dadf3b3fd60f"],["post/start-use-ghost.html","deda276052b6f5f0e46334cfa02caf92"],["post/start-use-newifi3.html","6343d5d0f2c68d1e73ff16147e1547b3"],["post/start-use-ubuntu-and-win.html","921425efe17b0cd9870b3d3b4ce69f44"],["post/strage-db-delete.html","e71fdd3e731d2fdce348d7374979c267"],["post/synology-hackintosh.html","708254c0f0a5ec0c3c866b2dfe946653"],["post/the-ultimate-programmers-guide-to-bash-scripting.html","ceb1a9bf896eb7a98a16159da8113a32"],["post/tool-awscli-overview-1.html","718cfa3398522c7fbc908e1089a52028"],["post/typora-upload-image-qiniu.html","cfa33fd6df953928546bdb0d43d919d4"],["post/ubutun-realtek-r8125-driver-install.html","9cb653c991202b5cbf171dba219bfe83"],["post/use-github-action-to-deploy-your-hexo-blog.html","e2d09517486ca868e591027ff68b3fc9"],["post/what-ct-is-and-how-it-works.html","cd032f91474d211f440f5029ef7a6b92"],["post/win10-vpn-lztp-ipsec-sharekey.html","9ba55334b066e1ae891211c493410199"],["post/yue-me-bridge.html","9d7f4372fb79766c6e596a9205f87fec"],["reading/index.html","0d4f31940ee4d4264dac714148fa5e01"],["schedule/index.html","823a9aed921c57681bac535b8db1e287"],["share/index.html","dcd8dcde0e82d79f17effc1ddd8e8a17"],["tags/CI-CD/index.html","453306b59159102d01c6257b261cd933"],["tags/Github-Actions/index.html","f12cc7b1285545f4d548535b3063443e"],["tags/Hexo/index.html","a182619d3d1aaf0f97723d2d275516e8"],["tags/aws-cli/index.html","07c3c9446a0970c6a247ac476d2f4280"],["tags/aws/index.html","a0a7c296ec791ea70d51fe6d7a60b06e"],["tags/bash/index.html","887c3afc26186af4c7f81c6f8f20b907"],["tags/benchmark/index.html","05f3813519efd39fe9d26b33b7f8de65"],["tags/books/index.html","796fd3b8f594de2a015a9cdd59b3dd92"],["tags/centos/index.html","b106b3b3ce0437cc988463139b8741ed"],["tags/cert/index.html","23eb74a7996036d77c1cdd3f8a897a19"],["tags/certificate-transparency/index.html","f0b9d1db93755a1eae1a8dddbaf810a9"],["tags/cgo/index.html","ce2da9d1da86ef5801ddc0e381328a48"],["tags/command/index.html","39c3db8eab5d675702e4ceb42fc9196b"],["tags/ct/index.html","29b9a1a5d189a7078802083f2441b2e5"],["tags/disqus/index.html","df75fd2a0276503d0c918262eb6e89b2"],["tags/dns/index.html","8eb6df072673f4fbb78018a5f156055c"],["tags/docker/index.html","c56ebb027dc5eabde25bfa8f9f9ea066"],["tags/gateway/index.html","c52b62732cd2a7c2dc0d3de8d8971bbe"],["tags/ghost/index.html","b6cc79e8dd07986ce4f6584a5db72744"],["tags/gin/index.html","fe2e9eea4d0b40fea68cb55c046c37e0"],["tags/git-hook/index.html","4a74d88f61cceea1735b1f85c39eacd3"],["tags/git/index.html","6d838cb6b26f2bc953eab5b613dbcd76"],["tags/github-pages/index.html","2242b37f50bf6f77a045e5902465cacc"],["tags/go/index.html","17d3031504c10fb8bda537c56d647171"],["tags/golang/index.html","8cc94db01ea4194c2246e07a2023c189"],["tags/golang/page/2/index.html","181e49ab4aac821f08796925cf1fd917"],["tags/goose/index.html","194b056d7d144c5656538062e93a519f"],["tags/grpc/index.html","12bd3e6a6e48d0d8de9d6ce0514e2a85"],["tags/handshake/index.html","ee3010d768dde42014c39997d8885dca"],["tags/hexo/index.html","99d60bdb0b9cfa2525384147dbe8b1ea"],["tags/https/index.html","767a097e9c3813236d4ec728f50f88bd"],["tags/index.html","a3d3819006fb49197670c6d89a517757"],["tags/index/index.html","4b040276122f6968a1f033adbb76fe59"],["tags/ipfs/index.html","d5f88e4336e20235a11579134deb0ccd"],["tags/like/index.html","8d5802a07570b93dfcf95d6f453710ac"],["tags/linux/index.html","ba2dba77a5e4fb8ca95689b42811725d"],["tags/location/index.html","af1ff8a45fd99f63d1cf79c0f2926ca6"],["tags/mac-os/index.html","d4ef4e98feae3be8578fd613ac1ad5e5"],["tags/merkle树/index.html","8cbfe14c3400ef80d9b90366eb71b0b5"],["tags/mime-types/index.html","cee26efb197759eb4d0dda81b0bd1ebe"],["tags/nas/index.html","c41ac65035d1c22ba35c57da6bb5f2c9"],["tags/newifi3/index.html","c0669d58b0a7b2472bbc4480071ec77c"],["tags/next/index.html","690817c9375d5b6f5a80967d11614287"],["tags/nginx/index.html","0280da2f4e77ecf1422d2cf72d7665c2"],["tags/oauth/index.html","ea325c45ac7f12736b474af70b1f1cea"],["tags/pkcs/index.html","a20b5318bcfb0e1766b63e2595238bff"],["tags/pki/index.html","7f5a41115a283a14882a5ae5f56b8286"],["tags/postgres/index.html","1f8a4670280ac5507bfbbd0eb27290c5"],["tags/protobuf/index.html","bdc37f7c5246eb964f7f2b51a43235cf"],["tags/recover/index.html","21c5cc3e23a3e527b937a8ae7e2bfc3b"],["tags/restful-api/index.html","56a82e1d05a8620335f47d48739fd798"],["tags/router/index.html","467a50ddd94e55d98d7c97d0c235d406"],["tags/rpc/index.html","a5cfe4d97d371b0934d8b2aed680df9b"],["tags/shell/index.html","1a6b6f39d3ccfbb810e1b0830db579d3"],["tags/snippet/index.html","1a8b419fb411dfe91086e526a9536f80"],["tags/sql/index.html","64f25cac0fab8c244775a872931a048e"],["tags/sqlite3/index.html","0aef458fe71b9a3c0579a50dd0c7dc6b"],["tags/ssh/index.html","1d725ece31a42ddc7be4a4ccf2aabe11"],["tags/ssl/index.html","10b5202bcf08194e4443a286dd0b00fc"],["tags/standard-version/index.html","8d4fc1ffc72f588f511b0b00ea2564c8"],["tags/sth/index.html","0493fc18c2c3aa9989d272bf054d4935"],["tags/stream/index.html","139717a99d792d8534d527702b8fc785"],["tags/swagger/index.html","286510e30ec7de906187244c4b3936f4"],["tags/timer/index.html","ca0afc0521179a4753da58e12c49874d"],["tags/tls/index.html","88c5cf80d458d9b6484b85ddb7173964"],["tags/tls1-3/index.html","8df2f99288d2515e2a1502f828c87607"],["tags/tshark/index.html","03fe13e78676092bbbbe7ece62a09424"],["tags/typora/index.html","3eaf4f4fe20272f258bbf65150576e5b"],["tags/ubuntu/index.html","91a528e823eb794a37339803341b409d"],["tags/vim/index.html","5a00a2bb4617cb37f327eecb975e23f4"],["tags/vpn/index.html","194913290ab49be688bf675ad516c5ed"],["tags/vscode/index.html","2e3ccd9cafe5d6c81920fdbd5fd5bd94"],["tags/windows/index.html","fb892024d85a7f201a5782ce66537475"],["tags/wireshark/index.html","d9e397feb2905759013cbea277d733b5"],["tags/yum/index.html","837ca34b267175faa1df9db3a5a19ed7"],["tags/交叉编译/index.html","ce6d59e8cc2261fc8d080918cb803300"],["tags/加密/index.html","fced57a12cf1be739312fcccc8312f06"],["tags/宝宝/index.html","70e2bcbe43a96df5dfae62aa19a2e4e0"],["tags/工具/index.html","03b0060ea53519a5c558fda0c49ffb35"],["tags/幼儿园/index.html","599d8fec251bd21578fdd1ee47afdb84"],["tags/戚风蛋糕/index.html","4e351cd1123a61ef6e9a9200dff68bfc"],["tags/数据库/index.html","cf3c38b5c8f363896a39df26ca712188"],["tags/服务器/index.html","0564043b387de371704a91fe59554993"],["tags/生活/index.html","820d055c3e887316475b9a7d5293a84d"],["tags/美食/index.html","7aa6dfe941fb3710f629be6b6c2dea23"],["tags/自动化/index.html","6f31abf53ab6d702841cb2d7324735db"],["tags/落户/index.html","609c06b59ba2a71ae0f8be3b04240fff"],["tags/马拉松/index.html","2b1d4a771c431f22c74958aac2d74251"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







