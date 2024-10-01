var converter = new showdown.Converter();
var allFileList = [
    '007bbfb7.html', '00d62c1b.html', '017c7c7b.html', '025d127b.html', '045e512c.html', 
            '0520fde7.html', '05269061.html', '05f2a901.html', '06df4c85.html', '08ed6ac7.html',
            '09629e4f.html', '0962bcdd.html', '0a938d79.html', '0b148d64.html', '0ca9ddb6.html',
            '0d3d703e.html', '0dfd9992.html', '0e206a2e.html', '10fcaaa3.html', '11852cab.html',
            '1190e5a7.html', '137eaa0f.html', '150deff5.html', '178fcbfb.html', '1a07d186.html',
            '1b2d62fb.html', '1b60fb0c.html', '1bfc4729.html', '1c786137.html', '1caeab9d.html',
            '1cf80156.html', '1e0a9b12.html', '1e32b0e9.html', '1f0c79e5.html', '1f642eb9.html',
            '1f85a75f.html', '1f876c06.html', '1fad071e.html', '2013d3e2.html', '2204b7a8.html',
            '22168020.html', '22233c11.html', '2281f1f4.html', '228f6490.html', '22eb0ac0.html',
            '234bbc79.html', '23581191.html', '239be575.html', '23b5c85d.html', '253bf280.html',
            '25d487eb.html', '25d8a9c8.html', '25ff71a9.html', '264363fd.html', '272f95fa.html',
            '27a28665.html', '28bf18c6.html', '28e73c20.html', '29623171.html', '29c11459.html',
            '29ec7d0e.html', '2bcee788.html', '2bee17df.html', '2c608aff.html', '2dc579da.html',
            '2dd70a9a.html', '2dee498d.html', '31aa019c.html', '321b1fc6.html', '32597951.html',
            '3345333e.html', '3428a4f5.html', '3618c87e.html', '3631a71a.html', '363442ee.html',
            '36d67576.html', '36fdfd69.html', '3906de3d.html', '39a8645d.html', '39e1d7f9.html',
            '3aa6fb7a.html', '3ac3eb23.html', '3af2c5a8.html', '3bd67248.html', '3bdb4ada.html',
            '3befdf3e.html', '3c9b0459.html', '3de23699.html', '3e980e27.html', '3eda0437.html',
            '3f7978a0.html', '40853293.html', '4093f84a.html', '41e4d17e.html', '4258a5f9.html',
            '4290ef0e.html', '42a50994.html', '4347f46a.html', '444801d8.html', '445eab21.html',
            '447fd412.html', '44d8ac46.html', '44f52bb0.html', '4522001f.html', '4612dd53.html',
            '46442a0e.html', '469497ad.html', '46f33fce.html', '47c1f68c.html', '484b58aa.html',
            '48d8fb45.html', '4938f0c2.html', '496994bd.html', '49d1d64f.html', '4be741c5.html',
            '4c4377d9.html', '4c5c2cf0.html', '50846271.html', '508bd3b6.html', '50cb2852.html',
            '5117e062.html', '5168d44c.html', '539a4f51.html', '53b68214.html', '543a7ed5.html',
            '54d82841.html', '54d9e175.html', '5521c0d9.html', '5582e5ca.html', '5614dbcf.html',
            '56dc2b01.html', '56ff96f3.html', '57aa92db.html', '5ad4f10b.html', '5bd6f4ac.html',
            '5c0a986e.html', '5c2c9af4.html', '5daaa586.html', '60b61512.html', '6150a2bd.html',
            '623ea044.html', '62c24649.html', '63613498.html', '6430c8c4.html', '6455b5f5.html',
            '662c240a.html', '67385a82.html', '673ef223.html', '6773b310.html', '67a3c6ac.html',
            '67a423a3.html', '67e8384a.html', '681b3aeb.html', '6855a6e4.html', '68b16354.html',
            '694f12f3.html', '6a1e5592.html', '6aa20dc0.html', '6b9890af.html', '6c434453.html',
            '6cdd2623.html', '6cf79266.html', '6d0160f0.html', '6d0aefbc.html', '6d58a25d.html',
            '6d75e8bb.html', '6e02f1e3.html', '6e19193c.html', '6e82a1ae.html', '6ecd11f4.html',
            '6f8cd79b.html', '6fa7a44f.html', '72322fa7.html', '72ca375d.html', '73251a56.html',
            '7447852a.html', '7468f01a.html', '746b3537.html', '74dd1130.html', '75b8110e.html',
            '760b3cac.html', '776ffc46.html', '77fdfe62.html', '780d0b14.html', '7837ac64.html',
            '794b24be.html', '7b6016b9.html', '7b7f7511.html', '7c008303.html', '7ddcd7ec.html',
            '7df24a62.html', '7e0986d6.html', '7f4411dc.html', '7fe24cdd.html', '80af3007.html',
            '810b9b61.html', '82819916.html', '83302e8f.html', '834ec97d.html', '8403a5d5.html',
            '846bdb03.html', '855e0971.html', '85c4e7cd.html', '868de0fa.html', '8731374e.html',
            '88a10436.html', '88a62173.html', '890034e9.html', '8a004b2b.html', '8be77c9e.html',
            '8d5021e8.html', '8d510a79.html', '8e1813be.html', '8e5a5113.html', '8eb1be9a.html',
            '8efcae92.html', '8f2ea7aa.html', '90c28cc7.html', '90f3ed37.html', '913fb3ed.html',
            '91413438.html', '91714a58.html', '9172f3a0.html', '928ad970.html', '93b581b8.html',
            '941d9a10.html', '94f9d214.html', '952a094c.html', '9565186b.html', '95990924.html',
            '963e52fc.html', '97999447.html', '97a05b5b.html', '98cf29f8.html', '995c5fa3.html',
            '99b1bc43.html', '99fa7670.html', '9aec4887.html', '9af7a82c.html', '9d9215db.html',
            '9dfd6313.html', '9ecd008a.html', '9edfc990.html', '9f236235.html', 'a1570a43.html',
            'a2fd1cf0.html', 'a3325580.html', 'a3df8b1e.html', 'a416b8f3.html', 'a48eeaf7.html',
            'a5313dff.html', 'a5f85a15.html', 'a61ba2ce.html', 'a61f2674.html', 'a64e4611.html',
            'a65b410d.html', 'a68b268e.html', 'a699fb00.html', 'a740d043.html', 'a78176bb.html',
            'a79310a0.html', 'a85d4709.html', 'a87f7484.html', 'a8c38be5.html', 'a8d7556c.html',
            'a9f96cdd.html', 'aabf363d.html', 'aba27056.html', 'ac0a08a4.html', 'ae3edfdc.html',
            'ae4f1146.html', 'aedd82e4.html', 'af902bf9.html', 'b0c4d837.html', 'b190f7f5.html',
            'b1948b0a.html', 'b230c067.html', 'b27ca6d3.html', 'b2862040.html', 'b527c5c6.html', 
            'b548a754.html', 'b60334d2.html', 'b6afb2da.html', 'b7249182.html', 'b775ac94.html',
            'b782dc8a.html', 'b8825c91.html', 'b8cdaf2b.html', 'b91ae062.html', 'b94a9452.html',
            'b9b7f026.html', 'ba26e723.html', 'ba97ae07.html', 'bb43febb.html', 'bbc9ae5d.html',
            'bc1d5164.html', 'bd4472b8.html', 'bda2d7a6.html', 'bdad9b1f.html', 'be94b721.html',
            'beb8660c.html', 'c0f76784.html', 'c1d99e64.html', 'c3e719e8.html', 'c3f564a4.html',
            'c444b776.html', 'c59eb873.html', 'c8cbb738.html', 'c8f0f002.html', 'c909285e.html',
            'c9e6f938.html', 'c9f8e694.html', 'caa06a1f.html', 'cbded52d.html', 'cce03e0d.html',
            'cdecee7f.html', 'ce22a75a.html', 'ce4f8723.html', 'ce602527.html', 'ce9e57f2.html',
            'cf98881b.html', 'd037b0a7.html', 'd06dbe63.html', 'd07ae81c.html', 'd0f5fe59.html',
            'd10ecb37.html', 'd13f3404.html', 'd22278a0.html', 'd23f8c26.html', 'd2abd087.html',
            'd364b489.html', 'd406998b.html', 'd43fd935.html', 'd4469b4b.html', 'd4a91cb9.html',
            'd4f3cd78.html', 'd511f180.html', 'd5d6de2d.html', 'd631b094.html', 'd687bc17.html',
            'd6ad076f.html', 'd89b689b.html', 'd8c310e9.html', 'd90796e8.html', 'd9f24cd1.html',
            'd9fac9be.html', 'dae9d2b5.html', 'db3e9e38.html', 'db93a21d.html', 'dbc1a6ce.html',
            'dc0a314f.html', 'dc1df850.html', 'dc433765.html', 'ddf7fa4f.html', 'de1cd16c.html',
            'ded97339.html', 'e179c5f4.html', 'e21d9049.html', 'e26a3af2.html', 'e3497940.html',
            'e40b9e2f.html', 'e48d4e1a.html', 'e5062a87.html', 'e509e548.html', 'e50d258f.html',
            'e6721834.html', 'e73095fd.html', 'e76a88a6.html', 'e8593010.html', 'e8dc4411.html',
            'e9614598.html', 'e98196ab.html', 'e9afcf9a.html', 'ea32f347.html', 'ea786f4a.html',
            'eb281b96.html', 'eb5a1d5d.html', 'ec883f72.html', 'ecdecbb3.html', 'ed36ccf7.html',
            'ef135b50.html', 'f15e1fac.html', 'f1cefba8.html', 'f25fbde4.html', 'f25ffba3.html',
            'f2829549.html', 'f35d900a.html', 'f5b8619d.html', 'f76d97a5.html', 'f8a8fe49.html',
            'f8b3ba0a.html', 'f8c80d96.html', 'f8ff0b80.html', 'f9012d9b.html', 'fafffa47.html',
            'fcb5c309.html', 'fcc82909.html', 'feca6190.html', 'ff28f65a.html', 'ff805c23.html'
];

var indexFileList = allFileList.slice(0, 5);

$(document).ready(function() {
    var currentPage = window.location.pathname.split("/").pop();
    var fileList = currentPage === 'visualization.html' ?  allFileList : indexFileList;

    fileList.forEach(function(filename) {
        var imgName = filename.split('.html')[0] + '.png';
        var imgSrc = './images/thumbnails/' + imgName;
        var text = imgName.replace('.png', '');
        $('#file-list').append('<div class="thumbnail-container"><img src="' + imgSrc + '" data-file="' + filename + '"><p>' + text + '</p></div>');
    });

    $('#file-list img').click(function() {
        var filename = $(this).attr('data-file');
        loadHTMLFile(filename);
    });

    $('#file-list').show();
});

function loadHTMLFile(filename) {
    window.location.href = './tasks/' + filename;
}