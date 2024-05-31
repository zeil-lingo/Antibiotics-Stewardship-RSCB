script.html

<script>

function update_variables() {
    var nama_dpjp = $('#nama_dpjp_input').val();
    var nama_pasien = $('[name="nama_pasien"]').val();
    var ruangan = $('[name="ruangan"]').val();
    var no_rekam_medis = $('[name="no_rekam_medis"]').val();
    var tanggal_lahir = $('[name="tanggal_lahir"]').val();
    var jenis_kelamin = $('[name="jenis_kelamin"]:checked').val();
    var berat_badan = $('[name="berat_badan"]').val();
    var tanggal_mrs = $('[name="tanggal_mrs"]').val();
    var diagnosis = $('[name="diagnosis"]').val();
    var keadaan_umum = $('[name="keadaan_umum"]').val();
    var tekanan_darah_pertama = $('[name="tekanan_darah_pertama"]').val();
    var tekanan_darah_kemarin = $('[name="tekanan_darah_kemarin"]').val();
    var tekanan_darah_hari_ini = $('[name="tekanan_darah_hari_ini"]').val();
    var nadi_pertama = $('[name="nadi_pertama"]').val();
    var nadi_kemarin = $('[name="nadi_kemarin"]').val();
    var nadi_hari_ini = $('[name="nadi_hari_ini"]').val();
    var rr_pertama = $('[name="rr_pertama"]').val();
    var rr_kemarin = $('[name="rr_kemarin"]').val();
    var rr_hari_ini = $('[name="rr_hari_ini"]').val();
    var suhu_pertama = $('[name="suhu_pertama"]').val();
    var suhu_kemarin = $('[name="suhu_kemarin"]').val();
    var suhu_hari_ini = $('[name="suhu_hari_ini"]').val();
    var kondisi_saat_ini = $('[name="kondisi_saat_ini"]').val();
    var penyakit_penyerta = $('[name="penyakit_penyerta"]').val();
    var pasien_rujukan = $('[name="pasien_rujukan"]:checked').val();
    var nama_rs = $('[name="nama_rs"]').val();
    var riwayat_antimikroba = $('[name="riwayat_antimikroba"]:checked').val();
    var antimikroba_1 = $('[name="antimikroba_1"]').val();
    var keterangan_1 = $('[name="keterangan_1"]').val();
    var stop_tanggal_1 = $('[name="stop_tanggal_1"]').val();
    var lama_pemakaian_1 = $('[name="lama_pemakaian_1"]').val();
    var antimikroba_2 = $('[name="antimikroba_2"]').val();
    var keterangan_2 = $('[name="keterangan_2"]').val();
    var stop_tanggal_2 = $('[name="stop_tanggal_2"]').val();
    var lama_pemakaian_2 = $('[name="lama_pemakaian_2"]').val();
    var antimikroba_3 = $('[name="antimikroba_3"]').val();
    var keterangan_3 = $('[name="keterangan_3"]').val();
    var stop_tanggal_3 = $('[name="stop_tanggal_3"]').val();
    var lama_pemakaian_3 = $('[name="lama_pemakaian_3"]').val();
    var nama_antimikroba_1 = $('[name="nama_antimikroba_1"]').val();
    var nama_antimikroba_2 = $('[name="nama_antimikroba_2"]').val();
    var nama_antimikroba_3 = $('[name="nama_antimikroba_3"]').val();
    var hasil_kultur = $('[name="hasil_kultur"]:checked').val();
    var dikirim_tanggal = $('[name="dikirim_tanggal"]').val();
    var tanggal_kultur_1 = $('[name="tanggal_kultur_1"]').val();
    var spesimen_1 = $('[name="spesimen_1"]').val();
    var hasil_1 = $('[name="hasil_1"]').val();
    var ris_1 = $('[name="ris_1"]').val();
    var darah_lengkap_1 = $('[name="darah_lengkap_1"]').val();
    var darah_lengkap_2 = $('[name="darah_lengkap_2"]').val();
    var darah_lengkap_3 = $('[name="darah_lengkap_3"]').val();
    var pemeriksaan_radiologi_1 = $('[name="pemeriksaan_radiologi_1"]').val();
    var tanggal_radiologi_1 = $('[name="tanggal_radiologi_1"]').val();
    var hasil_radiologi_1 = $('[name="hasil_radiologi_1"]').val();
}

var form_data = {
    'https://drive.google.com/file/d/1tSmmSl55BJQorTmF3CFGmMgnIzoBDiDJ/view?usp=drive_link' : {
        'nama_dpjp': {
            'type': 'PDFTextField',
            'data': nama_dpjp
        },
        'nama_pasien': {
            'type': 'PDFTextField',
            'data': nama_pasien
        },
        'ruangan': {
            'type': 'PDFTextField',
            'data': ruangan
        },
        'no_rekam_medis': {
            'type': 'PDFTextField',
            'data': no_rekam_medis
        },
        'tanggal_lahir': {
            'type': 'PDFTextField',
            'data': tanggal_lahir
        },
        'jenis_kelamin': {
            'type': 'PDFTextField',
            'data': jenis_kelamin
        },
        'berat_badan': {
            'type': 'PDFTextField',
            'data': berat_badan
        },
        'tanggal_mrs': {
            'type': 'PDFTextField',
            'data': tanggal_mrs
        },
        'diagnosis': {
            'type': 'PDFTextField',
            'data': diagnosis
        },
        'keadaan_umum': {
            'type': 'PDFTextField',
            'data': keadaan_umum
        },
        'tekanan_darah_pertama': {
            'type': 'PDFTextField',
            'data': tekanan_darah_pertama
        },
        'tekanan_darah_kemarin': {
            'type': 'PDFTextField',
            'data': tekanan_darah_kemarin
        },
        'tekanan_darah_hari_ini': {
            'type': 'PDFTextField',
            'data': tekanan_darah_hari_ini
        },
        'nadi_pertama': {
            'type': 'PDFTextField',
            'data': nadi_pertama
        },
        'nadi_kemarin': {
            'type': 'PDFTextField',
            'data': nadi_kemarin
        },
        'nadi_hari_ini': {
            'type': 'PDFTextField',
            'data': nadi_hari_ini
        }
    }
    }
    return form_data
  }
</script>

<script>

  // https://stackoverflow.com/questions/25354313/saving-a-uint8array-to-a-binary-file
  var downloadBlob, downloadURL;

  downloadBlob = function (data, fileName, mimeType) {
    var blob, url;
    blob = new Blob([data], {
      type: mimeType
    });
    url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName);
    setTimeout(function () {
      return window.URL.revokeObjectURL(url);
    }, 1000);
  };

  downloadURL = function (data, fileName) {
    var a;
    a = document.createElement('a');
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  };


  async function fillForm(path) {
    var form_data = await update_variables();
    const formUrl = path;
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(formPdfBytes, { ignoreEncryption: true })
    const form = pdfDoc.getForm()

    for (const [fieldname, datadict] of Object.entries(form_data[path])) {
      var field = form.getField(fieldname)
      switch (datadict['type']) {
        case 'PDFTextField':
          try {
            field.setText(datadict['data'])
          }
          catch {

          }
          break;
        case 'PDFCheckBox':
          if (datadict['data'] == "check") {
            field.check()
          }
          break;
      }
    }

    const pdfBytes = await pdfDoc.save()

    // https://drive.google.com/file/d/1tSmmSl55BJQorTmF3CFGmMgnIzoBDiDJ/view?usp=drive_link
    var outputname = 'Berhasil, berhasil, hore'

    downloadBlob(pdfBytes, outputname, 'application/pdf')

  }
</script>