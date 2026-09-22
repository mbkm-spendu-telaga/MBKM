/* =========================================
   FIREBASE
========================================= */

import { initializeApp } 
    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyATYBO30VagRklzKgPU7oZIabiDVph3IIg",
    authDomain: "mbkm-9d46c.firebaseapp.com",
    projectId: "mbkm-9d46c",
    storageBucket: "mbkm-9d46c.firebasestorage.app",
    messagingSenderId: "63948956430",
    appId: "1:63948956430:web:c8f6aceb917e0a4f37ad5f"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const guestbookCollection =
    collection(db, "guestbook");

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



        /* =================================
   LOADING SCREEN 5 DETIK
================================= */

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loadingScreen");

    const loadingIcon =
        document.getElementById("loadingIcon");

    const loadingText =
        document.getElementById("loadingText");

    const loadingPercent =
        document.getElementById("loadingPercent");


    const icons = [
        "🌱",
        "📚",
        "🏫",
        "⚽",
        "🤝"
    ];


    const texts = [
        "Menyiapkan perjalanan kami...",
        "Mempersiapkan pendidikan...",
        "Menuju sekolah dan masyarakat...",
        "Mempersiapkan kegiatan...",
        "Menyatukan cerita kami..."
    ];


    let current = 0;


    /* Ganti icon setiap 1 detik */

    const iconInterval = setInterval(function () {

        current++;

        if (current >= icons.length) {
            current = icons.length - 1;
        }


        loadingIcon.style.animation = "none";

        void loadingIcon.offsetWidth;

        loadingIcon.style.animation =
            "iconChange .8s ease";


        loadingIcon.textContent =
            icons[current];


        loadingText.textContent =
            texts[current];


    }, 1000);


    /* Persentase 0 → 100 */

    let percent = 0;


    const percentInterval = setInterval(function () {

        percent++;

        loadingPercent.textContent = percent;


        if (percent >= 100) {

            clearInterval(percentInterval);

        }

    }, 50);


    /* Setelah 5 detik */

    setTimeout(function () {

        clearInterval(iconInterval);

        loadingScreen.classList.add("hide");


        setTimeout(function () {

            loadingScreen.style.display =
                "none";

        }, 800);


    }, 5000);

});

/* =================================
   SHARE WHATSAPP
================================= */

const shareWhatsApp =
    document.getElementById("shareWhatsApp");

if (shareWhatsApp) {

    const websiteURL =
        window.location.href;

    const message =
        "🌱 Yuk lihat website kelompok MBKM kami!\n\n" +
        websiteURL;

    shareWhatsApp.href =
        "https://wa.me/?text=" +
        encodeURIComponent(message);

}

/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   BUKU TAMU - FIREBASE FIRESTORE
========================================= */

const guestbookQuery = query(
    guestbookCollection,
    orderBy("createdAt", "asc")
);


/* TAMPILKAN PESAN */

onSnapshot(
    guestbookQuery,
    function(snapshot) {

        const container =
            document.getElementById("guestMessages");

        if (!container) return;

        container.innerHTML = "";

        if (snapshot.empty) {

            container.innerHTML = `
                <div class="guest-empty">
                    💌 Belum ada pesan.<br>
                    Jadilah yang pertama meninggalkan pesan!
                </div>
            `;

            return;
        }

        snapshot.forEach(function(doc) {

            const message = doc.data();

const messageId = doc.id;
          
            const item =
                document.createElement("div");

            item.className = "guest-message";

            let waktu = "";

if (message.createdAt) {
    const tanggal = message.createdAt.toDate();

    waktu = tanggal.toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

item.innerHTML = `
    <div class="guest-message-name">
        ${escapeGuestText(message.name || "Anonim")}
    </div>

    <p class="guest-message-text">
        ${escapeGuestText(message.text || "")}
    </p>

    <div class="guest-message-time">
        ${waktu}
    </div>

    <button
        class="delete-message-btn"
        onclick="deleteGuestMessage('${messageId}')"
        style="display:none;"
    >
        🗑️ Hapus
    </button>
`;

            container.appendChild(item);
        });

        /* Scroll ke pesan terbaru */
        container.scrollTop =
            container.scrollHeight;
    },

    function(error) {

        console.error(
            "Firestore READ ERROR:",
            error
        );
    }
);


/* KIRIM PESAN */

async function addGuestMessage() {

    const nameInput =
        document.getElementById("guestName");

    const messageInput =
        document.getElementById("guestMessage");

    const name =
        nameInput.value.trim();

    const text =
        messageInput.value.trim();


    if (!name || !text) {

        alert("Nama dan pesan harus diisi.");

        return;
    }


    if (name.length > 40) {

        alert("Nama maksimal 40 karakter.");

        return;
    }


    if (text.length > 250) {

        alert("Pesan maksimal 250 karakter.");

        return;
    }


    try {

        await addDoc(
            guestbookCollection,
            {
                name: name,
                text: text,
                createdAt: serverTimestamp()
            }
        );


        nameInput.value = "";
        messageInput.value = "";


        alert("Pesan berhasil dikirim! 💌");


    } catch (error) {

        console.error(
            "Firestore WRITE ERROR:",
            error
        );

        alert(
            "Gagal mengirim pesan:\n\n" +
            error.code +
            "\n" +
            error.message
        );
    }
}


/* AMANKAN TEKS */

function escapeGuestText(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


window.addGuestMessage =
    addGuestMessage;

/* =========================================
   ADMIN LOGIN
========================================= */

async function adminLogin() {

    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value;

    if (!email || !password) {
        alert("Email dan password harus diisi.");
        return;
    }

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        document.getElementById("adminLoginModal").classList.remove("show");

        alert("Login admin berhasil! 🔐");

    } catch (error) {

        console.error("LOGIN ERROR:", error);

        alert(
            "Login gagal:\n\n" +
            error.code +
            "\n" +
            error.message
        );
    }
}


async function adminLogout() {

    try {

        await signOut(auth);

        alert("Berhasil logout.");

    } catch (error) {

        console.error("LOGOUT ERROR:", error);
    }
}


onAuthStateChanged(auth, function(user) {

    const loginButton =
        document.getElementById("adminLoginButton");

    const logoutButton =
        document.getElementById("adminLogoutButton");

    const deleteButtons =
        document.querySelectorAll(".delete-message-btn");


    if (!loginButton || !logoutButton) return;


    if (user) {

        loginButton.style.display = "none";

        logoutButton.style.display = "inline-flex";

        deleteButtons.forEach(function(button) {
            button.style.display = "inline-flex";
        });

    } else {

        loginButton.style.display = "inline-flex";

        logoutButton.style.display = "none";

        deleteButtons.forEach(function(button) {
            button.style.display = "none";
        });
    }
});

window.adminLogin = adminLogin;
window.adminLogout = adminLogout;

/* =========================================
   KONFIRMASI HAPUS PESAN
========================================= */

let messageToDelete = null;

function deleteGuestMessage(messageId) {

    const user = auth.currentUser;

    if (!user) {
        alert("Kamu harus login sebagai admin.");
        return;
    }

    messageToDelete = messageId;

    const modal =
        document.getElementById("deleteConfirmModal");

    if (modal) {
        modal.classList.add("show");
    }
}


async function confirmDeleteGuestMessage() {

    if (!messageToDelete) return;

    try {

        await deleteDoc(
            doc(db, "guestbook", messageToDelete)
       );

        closeDeleteConfirm();

        messageToDelete = null;

    } catch (error) {

        console.error(
            "DELETE ERROR:",
            error
        );

        alert(
            "Gagal menghapus pesan:\n\n" +
            error.code +
            "\n" +
            error.message
        );
    }
}


function closeDeleteConfirm() {

    const modal =
        document.getElementById("deleteConfirmModal");

    if (modal) {
        modal.classList.remove("show");
    }

    messageToDelete = null;
}


window.deleteGuestMessage =
    deleteGuestMessage;

window.confirmDeleteGuestMessage =
    confirmDeleteGuestMessage;

window.closeDeleteConfirm =
    closeDeleteConfirm;


window.deleteGuestMessage =
    deleteGuestMessage;

function openAdminLogin() {
    document
        .getElementById("adminLoginModal")
        .classList.add("show");
}

function closeAdminLogin() {
    document
        .getElementById("adminLoginModal")
        .classList.remove("show");
}

window.openAdminLogin = openAdminLogin;
window.closeAdminLogin = closeAdminLogin;

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

   console.log("SCRIPT.JS BERHASIL DIJALANKAN DI GITHUB");
   
