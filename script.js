/* =========================================
   DATA ANGGOTA KKN
========================================= */

const anggota = [
    {
        nama: "Moh. Hafidz Arizki",
        jabatan: "Koordinator Sekolah",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota1.jpg",
        bio: "Bertanggung jawab dalam Mengkordinasi kelompok MBKM."
    },

    {
        nama: "Moh. Arzikim D. Kase",
        jabatan: "Wakil Korsek",
        jurusan: "PPKn",
        foto: "images/anggota2.jpg",
        bio: "Bertanggung jawab membantu mengoordinasikan seluruh anggota dan kegiatan kelompok MBKM."
    },

    {
        nama: "Olivia Bantuha",
        jabatan: "Sekretaris",
        jurusan: "PPKn",
        foto: "images/anggota3.jpg",
        bio: "Mengelola administrasi, surat-menyurat, dan berbagai kebutuhan administrasi kelompok."
    },

    {
        nama: "Fania Aulya Midu",
        jabatan: "Bendahara",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota4.jpg",
        bio: "Mengatur keuangan dan kebutuhan dana selama kegiatan KKN berlangsung."
    },

    {
        nama: "Wajriyanto J pakaya",
        jabatan: "Koor Perlengkapan",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota5.jpg",
        bio: "Mengkoordinir Anggota."
    },

    {
        nama: "Jusriawan j Lakuntu",
        jabatan: "Perlengkapan",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota6.jpg",
        bio: "Kalau butuh apa apa hubungi kami aja."
    },

    {
        nama: "Sitti Fatimah Tuzzahra",
        jabatan: "Perlengkapan",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota7.jpg",
        bio: "Aktif membantu pelaksanaan kegiatan pendidikan dan pemberdayaan masyarakat."
    },

    
  {
        nama: "Anisa Rumpabulu",
        jabatan: "Perlengkapan",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota8.jpg",
        bio: "Kalau Butuh apa apa hubungi kami aja"
  },
  
  {
        nama: "Rindi Husain",
        jabatan: "Perlengkapan",
        jurusan: "PPKn",
        foto: "images/anggota9.jpg",
        bio: "Berperan dalam kegiatan sosial, lingkungan, dan program kerja kelompok."
},
  
  
  {
        nama: "Tegar Wicaksana Sutisna",
        jabatan: "Koor PDD",
        jurusan: "Pendidikan Kepatihan Olahraga",
        foto: "images/anggota10.jpg",
        bio: " Mengkoordinasikan seluruh bidang PDD, memastikan konsep, publikasi, dekorasi, dan dokumentasi berjalan terarah serta sesuai dengan kebutuhan setiap kegiatan."
  },
  
  
  {
        nama: "Sutrin R. moha",
        jabatan: "PDD",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota11.jpg",
        bio: "Di balik setiap kegiatan yang terlihat, ada kami yang bekerja di balik layar."
  },

  
  {
        nama: "Firanti R. Unusa",
        jabatan: "PDD",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota12.jpg",
        bio: "Di balik setiap kegiatan yang terlihat, ada kami yang bekerja di balik layar."
  },
  
  {
        nama: "Egi Yunus",
        jabatan: "Humas",
        jurusan: "Pendidikan IPA",
        foto: "images/anggota13.jpg",
        bio: "Humas Humas Humas."
  },
  
  {
        nama: "Brilian Aditya",
        jabatan: "Humas",
        jurusan: "Pendidikan IPA",
        foto: "images/anggota14.jpg",
        bio: "Pokoknya Humas."
  }
];



/* =========================================
   ELEMENT HTML
========================================= */

const container = document.getElementById("memberContainer");
const modal = document.getElementById("profileModal");
const modalPhoto = document.getElementById("modalPhoto");
const modalRole = document.getElementById("modalRole");
const modalName = document.getElementById("modalName");
const modalStudy = document.getElementById("modalStudy");
const modalBio = document.getElementById("modalBio");
const navMenu = document.getElementById("navMenu");


/* =========================================
   MEMBUAT KARTU ANGGOTA
========================================= */

anggota.forEach(function (orang) {

    const card = document.createElement("div");

    card.className = "member-card";

    card.innerHTML = `
        <img
            src="${orang.foto}"
            alt="${orang.nama}"
        >

        <div class="member-info">

            <div class="member-role">
                ${orang.jabatan}
            </div>

            <h3>
                ${orang.nama}
            </h3>

            <p>
                ${orang.jurusan}
            </p>

        </div>
    `;

    card.addEventListener("click", function () {
        openProfile(orang);
    });

    container.appendChild(card);
});


/* =========================================
   BUKA PROFIL
========================================= */

function openProfile(orang) {

    modalPhoto.src = orang.foto;

    modalPhoto.alt = orang.nama;

    modalRole.textContent = orang.jabatan;

    modalName.textContent = orang.nama;

    modalStudy.textContent = orang.jurusan;

    modalBio.textContent = orang.bio;

    modal.classList.add("active");
}


/* =========================================
   TUTUP PROFIL
========================================= */

function closeProfile() {

    modal.classList.remove("active");
}


/* =========================================
   MENU MOBILE
========================================= */

function toggleMenu() {

    navMenu.classList.toggle("active");
}


/*
   Beri tahu browser bahwa fungsi
   toggleMenu tersedia untuk HTML.
*/

window.toggleMenu = toggleMenu;

window.closeProfile = closeProfile;


/* =========================================
   TUTUP MENU SETELAH KLIK LINK
========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   TUTUP MODAL KETIKA KLIK DI LUAR
========================================= */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeProfile();

    }

});



/* =========================================
   TUTUP MODAL DENGAN TOMBOL ESC
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProfile();

    }

});

/* =========================================
   MUSIK BACKGROUND
========================================= */

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");


function toggleMusic() {

    if (!bgMusic || !musicButton) {
        return;
    }


    if (bgMusic.paused) {

        bgMusic.play()
            .then(function() {

                musicButton.textContent = "🔊";

                musicButton.classList.add("playing");

            })
            .catch(function(error) {

                console.log(
                    "Musik belum dapat dimainkan:",
                    error
                );

            });

    } else {

        bgMusic.pause();

        musicButton.textContent = "🎵";

        musicButton.classList.remove("playing");

    }

}


/* Agar onclick di HTML dapat memanggilnya */
window.toggleMusic = toggleMusic;

/* =========================
   ANIMASI SAAT SCROLL
========================= */

const revealElements = document.querySelectorAll(
    "section, .card, .member-card, .program-card, .gallery-item"
);

const revealObserver = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


/* =========================
   FOTO KLIK → ZOOM
========================= */

const photoViewer = document.createElement("div");

photoViewer.className = "photo-viewer";

photoViewer.innerHTML = `
    <span class="close-photo">&times;</span>
    <img src="" alt="Foto">
`;

document.body.appendChild(photoViewer);

const viewerImage = photoViewer.querySelector("img");
const closePhoto = photoViewer.querySelector(".close-photo");

document.querySelectorAll("img").forEach(function(img) {

    img.classList.add("photo-zoom");

    img.addEventListener("click", function() {

        viewerImage.src = img.src;

        photoViewer.classList.add("show");

    });

});


closePhoto.addEventListener("click", function() {
    photoViewer.classList.remove("show");
});


photoViewer.addEventListener("click", function(e) {

    if (e.target === photoViewer) {
        photoViewer.classList.remove("show");
    }

});


document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        photoViewer.classList.remove("show");
    }

});

/* =========================
   PROGRAM KERJA POPUP
========================= */

function openProgram(title, description) {

    const modal = document.getElementById("programModal");
    const titleElement = document.getElementById("programTitle");
    const descriptionElement = document.getElementById("programDescription");

    if (!modal) return;

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    modal.classList.add("show");
}


function closeProgram() {

    const modal = document.getElementById("programModal");

    if (!modal) return;

    modal.classList.remove("show");
}


/* Tutup ketika klik area luar popup */

const programModal = document.getElementById("programModal");

if (programModal) {

    programModal.addEventListener("click", function(e) {

        if (e.target === programModal) {
            closeProgram();
        }

    });

}


/* Tutup dengan tombol ESC */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeProgram();
    }

});