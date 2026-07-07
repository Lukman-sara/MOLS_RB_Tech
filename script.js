// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 0. HIDE LOADING
    setTimeout(() => {
        const loader = document.getElementById('loadingScreen');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 800);

    // ==========================================
    // 1. DATA PRODUK (FULL 51 ITEMS)
    // ==========================================
    const defaultProducts = [
        // === SMARTPHONES (21 items) ===
        { id: 101, nama: "TECNO Phantom V Fold 2", brand: "TECNO", kategori: "Smartphone", harga: 14999000, stok: 5, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RIQw5AClK-b3TrmORmepkz4vDUQtvca9Adsw4DqRWw&s=10", deskripsi: "Flagship Foldable termutakhir dari Tecno dengan dual layar 120Hz dan chipset bertenaga tinggi." },
        { id: 102, nama: "TECNO Pova 7 5G", brand: "TECNO", kategori: "Smartphone", harga: 3999000, stok: 8, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB6zyMs3csM3piTJ2LUAjCHcxPFqGgg5iw6Xtf-PPDA&s=10", deskripsi: "Smartphone lipat clamshell stylish dengan layar cover fungsional besar." },
        { id: 103, nama: "TECNO Camon 40 Pro 5G", brand: "TECNO", kategori: "Smartphone", harga: 3499000, stok: 12, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf94gqRoUtzD2Ax0_h6PGuYsQ7MKh9lJkma-pDwPFCJQ&s=10", deskripsi: "Rajanya fotografi kelas menengah dibekali sensor periskop ultra-sensing." },
        { id: 104, nama: "TECNO Spark 40 Pro", brand: "TECNO", kategori: "Smartphone", harga: 2399000, stok: 20, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS7Ul2-szixfrhyu-bNpQquC3v-vWFVtfbO37mGROrA&s=10", deskripsi: "Performa maksimal harga terjangkau dengan layar Amoled 120Hz." },
        { id: 105, nama: "Infinix GT 30 Pro", brand: "Infinix", kategori: "Smartphone", harga: 4599000, stok: 7, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uNurvOnhPzrmII9bbx5ZzEtS7e8js_gtNV8brevS0A&s=10", deskripsi: "Dedicated gaming smartphone dengan cyber mecha design dan bypass charging." },
        { id: 106, nama: "Infinix Note 50 Pro+", brand: "Infinix", kategori: "Smartphone", harga: 3899000, stok: 15, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTok0xmR18dCe0V5W9--8BKee6AAN74SyrA23Z8-CvdTw&s=10", deskripsi: "Pengisian super cepat 100W dengan layar lengkung premium 3D Curved." },
        { id: 107, nama: "Infinix Zero 40 5G", brand: "Infinix", kategori: "Smartphone", harga: 5299000, stok: 9, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW881zud1LKO-BgwGlqzj8eDgEQX9LWGjdoUIfwlYSA&s=10", deskripsi: "Kamera vlogging profesional berkemampuan perekaman 4K 60FPS depan belakang." },
        { id: 108, nama: "Infinix Hot 50 Pro+", brand: "Infinix", kategori: "Smartphone", harga: 2599000, stok: 25, rating: 4.3, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZ7P_PQOUyTlLlbzGf-A-HbE81dNkZU1j7ErcjZYwTA&s=10", deskripsi: "Desain ultra ramping paling tipis di kelasnya dengan ketahanan tangguh." },
        { id: 109, nama: "itel S25 Ultra", brand: "itel", kategori: "Smartphone", harga: 2199000, stok: 14, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx40zfd1EmF7eBTPGQoVUaYJnuvrHknc3dqW1gwmgsJA&s=10", deskripsi: "Menghadirkan kemewahan desain bodi lengkung premium di kelas entri." },
        { id: 110, nama: "itel RS4", brand: "itel", kategori: "Smartphone", harga: 1899000, stok: 30, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRq7qFrDLtdfO0xEJd-M6ynOEUY1QlBMFryYjTAGoOg&s=10", deskripsi: "Ngebut maksimal dengan RAM besar dan optimasi gaming engine mediatek." },
        { id: 111, nama: "Samsung Galaxy S25 Ultra", brand: "Samsung", kategori: "Smartphone", harga: 23999000, stok: 4, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hV5lYjZ_O2FvjLcSU97x5eQ9c8H-vHmik8UMLT9_ww&s=10", deskripsi: "Puncak inovasi Galaxy AI, rangka Titanium, serta kamera resolusi super monster 200MP." },
        { id: 112, nama: "Samsung Galaxy Z Fold7", brand: "Samsung", kategori: "Smartphone", harga: 26499000, stok: 3, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk3TfLzZ68v_nDf8hVeX6snsUKbw0fXJlwSNPhpfTtA&s=10", deskripsi: "Produktivitas tanpa batas bodi makin tipis lipatan makin samar tak terlihat." },
        { id: 113, nama: "Samsung Galaxy A56 5G", brand: "Samsung", kategori: "Smartphone", harga: 6299000, stok: 18, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-j51C7kh241O_Bz7jtMT5xqiIioL6sUKOe-LHYFf5g&s=10", deskripsi: "Pilihan mid-range paling stabil dengan jaminan update software jangka panjang." },
        { id: 114, nama: "Xiaomi 15 Ultra", brand: "Xiaomi", kategori: "Smartphone", harga: 17499000, stok: 6, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNva8qtnflhfSccgoOq_wekHj3p80bm5UF4ZHTjsJOYA&s=10", deskripsi: "Lensa legendaris Leica Summilux berukuran sensor 1 inci, kualitas studio foto profesional." },
        { id: 115, nama: "Redmi Note 14 Pro 5G", brand: "Xiaomi", kategori: "Smartphone", harga: 4399000, stok: 22, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHv5-fJ8AwYaiDIC1-mZvwX0T_Tr83KAXSa2J0Oh2uA&s=10", deskripsi: "Layar lengkung 1.5K, perlindungan Gorilla Glass Victus tangguh tahan banting." },
        { id: 116, nama: "POCO X7 Pro", brand: "Xiaomi", kategori: "Smartphone", harga: 5199000, stok: 11, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjfuVbXIee0GLsjp1tsB_XkQmYdpMrC_8Qfqf-_hObQ&s=10", deskripsi: "Performa ekstrim skor antutu jutaan dengan prosesor kelas atas terkini." },
        { id: 117, nama: "OPPO Find X8 Pro", brand: "OPPO", kategori: "Smartphone", harga: 15999000, stok: 5, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS9XmPXwCQrjGs11t9tIYgtTAoVDt7h7_2p2ef9FAOw&s=10", deskripsi: "Masterpiece Hasselblad Portrait camera dengan sistem dual periskop zoom." },
        { id: 118, nama: "OPPO Reno14 Pro", brand: "OPPO", kategori: "Smartphone", harga: 7999000, stok: 10, rating: 4.6, gambar: "https://cdnpro.eraspace.com/media/catalog/product/o/p/oppo_reno14_5g_white_01_2_1.jpg", deskripsi: "Desain modis ramping berkilau dengan ketahanan AI Eraser cerdas." },
        { id: 119, nama: "OPPO A5 Pro", brand: "OPPO", kategori: "Smartphone", harga: 2999000, stok: 20, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYauQVy8tc3JnuiqeXegdC0idDrgTvUccnmqOtS1d8A&s=10", deskripsi: "Baterai awet tahan lama seharian penuh dilengkapi pengisian aman supervooc." },
        { id: 120, nama: "vivo X200 Pro", brand: "vivo", kategori: "Smartphone", harga: 16999000, stok: 4, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6d1N3gJ7DIPyOm8VHZvi7NaSwUOX7P_d71QTyAi2DJg&s=10", deskripsi: "Sensor kamera Zeiss APO 200MP menghasilkan detail zoom super jernih." },
        { id: 121, nama: "vivo V50 5G", brand: "vivo", kategori: "Smartphone", harga: 6599000, stok: 15, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2nfKTwlFt3ynuuQ3YY75NMQXaVla7311kdzRozG3mQ&s=10", deskripsi: "Aura Light Portrait pintar yang melembutkan pencahayaan foto wajah." },

        // === LAPTOPS (20 items) ===
        { id: 201, nama: "ASUS ROG Strix G18", brand: "ASUS", kategori: "Laptop", harga: 32999000, stok: 3, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4aqlIWqd9tTtYq6ZqVdv1vaq-ePtVagwWsbbT2dZ5Q&s=10", deskripsi: "Laptop gaming monster dengan layar 18 inci Nebula Display dan GPU RTX seri 40." },
        { id: 202, nama: "ASUS ROG Zephyrus G16", brand: "ASUS", kategori: "Laptop", harga: 28499000, stok: 4, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZsu7unmglBHYP4_PFFJYW_nuQ-2MH9_7P6MxCQR_jA&s=10", deskripsi: "Tipis, elegan, bertenaga tinggi dibalut sasis aluminium CNC premium." },
        { id: 203, nama: "ASUS TUF Gaming A15", brand: "ASUS", kategori: "Laptop", harga: 14799000, stok: 8, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tOJIUjm5GEtNUBE7AcA4HaTocE78X06PwyWca9GobA&s=10", deskripsi: "Ketahanan standar militer dipadukan prosesor AMD Ryzen kencang hemat daya." },
        { id: 204, nama: "ASUS Vivobook 14", brand: "ASUS", kategori: "Laptop", harga: 7299000, stok: 15, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrpbRYWVpFTgPmY7bxeAn91eKlSiu1K-uzS726UWk9A&s=10", deskripsi: "Partner andal mahasiswa harian enteng dibawa ke mana saja." },
        { id: 205, nama: "ASUS Zenbook 14 OLED", brand: "ASUS", kategori: "Laptop", harga: 16899000, stok: 6, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozxOPUjn9MjEt_q2hCnZ43U5TVjwchyiu9LlwKo367g&s=10", deskripsi: "Akurasi warna panel OLED 2.8K terbaik bagi para konten kreator visual." },
        { id: 206, nama: "Lenovo Legion Pro 7i gen 9", brand: "Lenovo", kategori: "Laptop", harga: 38999000, stok: 2, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUd3fQ0M5JvYP9BN8ry8jnrJnPI6cdjD8vxF09dk85Q&s=10", deskripsi: "Konfigurasi hardware rata kanan, pendinginan cairan AI Coldfront mutakhir." },
        { id: 207, nama: "Lenovo Legion 5", brand: "Lenovo", kategori: "Laptop", harga: 19499000, stok: 6, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF7zNJPe6NAhFM4TDv9CMaMMNRRl-YQXN9VZMwH03bA&s=10", deskripsi: "Keseimbangan sempurna estetika minimalis profesional dan performa brutal." },
        { id: 208, nama: "Lenovo LOQ 15", brand: "Lenovo", kategori: "Laptop", harga: 11299000, stok: 12, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZPi0LyjJsi61F_g61w0pftMWITRv6zg-QV2dw51G7w&s=10", deskripsi: "Pintu gerbang terbaik mencicipi ekosistem gaming kelas berat Lenovo." },
        { id: 209, nama: "Lenovo IdeaPad Slim 5 gen 8", brand: "Lenovo", kategori: "Laptop", harga: 9199000, stok: 14, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM108knv1MrS_Vre-Q0JgJqkURdlfjs01d6YU4uPF3vw&s=10", deskripsi: "Bodi sasis aluminium tipis dengan daya tahan baterai superior." },
        { id: 210, nama: "Lenovo ThinkPad E14 gen 7", brand: "Lenovo", kategori: "Laptop", harga: 12499000, stok: 10, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx72d_f84ai3j0TpOlUAn0zu1lgOyzAOSzGnpgHAcERA&s=10", deskripsi: "Keyboard paling ergonomis legendaris andalan korporasi dan ketahanan data." },
        { id: 211, nama: "Acer Predator Helios Neo 16", brand: "Acer", kategori: "Laptop", harga: 21499000, stok: 5, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8i8_j9gmNZokcAUC8LdrcCxosZcyjx1Ix0x7g91rWA&s=10", deskripsi: "Liquid metal thermal cooling menjaga stabilitas FPS game AAA tetap konsisten stabil." },
        { id: 212, nama: "Acer Nitro V 15", brand: "Acer", kategori: "Laptop", harga: 10499000, stok: 16, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbtOT8SFnKVkuuiCT1GUhkKohwbkO1-PGTZbnHSWy8A&s=10", deskripsi: "Laptop bernilai tinggi perpaduan spek tangguh di kelas harga rasional." },
        { id: 213, nama: "HP Victus 15", brand: "HP", kategori: "Laptop", harga: 11199000, stok: 11, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W8-mormLY-PNqOriivu-BtOnXDT7pJ0BR7SlTLZPTQ&s=10", deskripsi: "Desain understated rapi tanpa lampu RGB berlebih cocok untuk kuliah kerja." },
        { id: 214, nama: "HP Omen 16", brand: "HP", kategori: "Laptop", harga: 23999000, stok: 4, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMQTiHmFK4-erQsPo5oFj6u2H6BADH5X74CUi_BdGUQ&s=10", deskripsi: "Pengalaman komputasi gaming imersif dengan audio racikan Bang & Olufsen." },
        { id: 215, nama: "Dell Alienware M18", brand: "Dell", kategori: "Laptop", harga: 49999000, stok: 2, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_nGRLuBZJugn4-3qfSPffmpzcV7HalMJHW_i3aI-TQ&s=10", deskripsi: "Simbol kemewahan performa tanpa kompromi kasta tertinggi desktop replacement." },
        { id: 216, nama: "Dell XPS 13", brand: "Dell", kategori: "Laptop", harga: 22499000, stok: 4, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEeAHZlQNo91LQjTtywEfYrvZOIiG8dxBc1SFknN2AA&s=10", deskripsi: "Ultrabook Windows tercantik dengan bezel infinityedge luar biasa tipis super estetik." },
        { id: 217, nama: "MacBook Air M4 13", brand: "Apple", kategori: "Laptop", harga: 16999000, stok: 9, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmdEZjTspxNkrPPih7njTRi90NFeI_53ICkQS3CqrVg&s=10", deskripsi: "Baterai tahan hingga 18 jam ditenagai chip arsitektur silikon Apple M4 super sunyi." },
        { id: 218, nama: "MacBook Pro 14 M4", brand: "Apple", kategori: "Laptop", harga: 26999000, stok: 5, rating: 4.9, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBzhWgKiFGuuAtdQT0dO2VkGQ0mg4M8t0TuqFK7gzig&s=10", deskripsi: "Layar Liquid Retina XDR paling akurat, performa puncaknya para profesional kreatif video editor." },
        { id: 219, nama: "MSI Katana 15", brand: "MSI", kategori: "Laptop", harga: 15499000, stok: 7, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GNUjh45okTAn44dYTIxPG4DIMTJodpknqr602n78oA&s=10", deskripsi: "Keyboard RGB 4-zone dengan performa cooling mumpuni khas naga MSI." },
        { id: 220, nama: "Huawei MateBook D16", brand: "Huawei", kategori: "Laptop", harga: 10999000, stok: 12, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpvZkZvqNF7CnHeL8GnhiS9J_V8ELew52frIJPnL_Bw&s=10", deskripsi: "Layar lega 16 inci beraspek rasio produktif dengan antena penangkap sinyal jarak jauh." },

        // === ACCESSORIES (10 items) ===
        { id: 301, nama: "AirPods Pro Gen 2", brand: "Apple", kategori: "Aksesoris", harga: 3899000, stok: 20, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj1YlJGPw5Pv6VUnOAI_llv_uSWxOMrnAQHxgn8HVyg&s=10", deskripsi: "Peredam bising aktif (ANC) 2x lebih cerdas meredam hiruk pikuk suara luar." },
        { id: 302, nama: "Galaxy Buds3 Pro", brand: "Samsung", kategori: "Aksesoris", harga: 3199000, stok: 25, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYa0USBXtzcHQpKzhVIo6QJQFTiCoIv94dxUWjMaOSQ&s=10", deskripsi: "Audio Hi-Fi 24bit resolusi tinggi nyaman pas sempurna di telinga." },
        { id: 303, nama: "Apple Watch Series 10", brand: "Apple", kategori: "Aksesoris", harga: 7499000, stok: 10, rating: 4.8, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFLPjZQ9nN_TimCVhiJ-8KtcqFkjtXq6xkf7hrEAL1Q&s=10", deskripsi: "Layar terluas casing tertipis memantau kesehatan jantung dan oksigen darah presisi." },
        { id: 304, nama: "Xiaomi Watch S4", brand: "Xiaomi", kategori: "Aksesoris", harga: 2499000, stok: 15, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0rEKq8G-_jGkA7oyROiYrwKvgW-HZ79Of8ZyhzRWuA&s=10", deskripsi: "Desain bezel melingkar mekanis klasik dapat diganti bongkar pasang sesuai selera." },
        { id: 305, nama: "Mechanical Keyboard RGB", brand: "Gaming Gear", kategori: "Aksesoris", harga: 899000, stok: 40, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqMRKpOM2p2ib5xvv_G0PNCkxSnypmo5PgWnJzB2-kg&s=10", deskripsi: "Switch taktil responsif berdaya tahan ketuk puluhan juta kali." },
        { id: 306, nama: "Gaming Mouse RGB Wireless", brand: "Gaming Gear", kategori: "Aksesoris", harga: 649000, stok: 35, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6b3a64X2Z5iFr8BXl5LSmMHwvutyas7qOpwG-r4zrg&s=10", deskripsi: "Akurasi sensor DPI super tinggi tanpa hambatan delay kabel." },
        { id: 307, nama: "Power Bank Anker 20000mAh", brand: "Anker", kategori: "Aksesoris", harga: 799000, stok: 50, rating: 4.7, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydz8yN_Scv98gsYHOKW3dzC6v9JJ0KRhybochlW7nbQ&s=10", deskripsi: "Daya tampung masif dilengkapi proteksi arus pendek aman masuk kabin pesawat." },
        { id: 308, nama: "USB-C GaN Charger 67W", brand: "Anker", kategori: "Aksesoris", harga: 449000, stok: 45, rating: 4.6, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMe5oOPHmcfdPQUbS83TiENZnjArJhnZaXcDQ6cyjw6w&s=10", deskripsi: "Teknologi semikonduktor GaN ukuran mini sanggup cas cepat laptop dan hp." },
        { id: 309, nama: "OPPO Enco Air4 Pro", brand: "OPPO", kategori: "Aksesoris", harga: 1299000, stok: 18, rating: 4.5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBLo4mUdqRDNNAYhKB9p-Efkkq5XLsiILWsV9OWwf4Q&s=10", deskripsi: "Suara jernih vokal transparan bass menendang dalam jangka baterai awet." },
        { id: 310, nama: "TECNO Sonic 2 TWS", brand: "TECNO", kategori: "Aksesoris", harga: 399000, stok: 50, rating: 4.4, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE47pCfFqGI7uDpmLunGMvoFNPDkZHjRMmseev5w-umg&s=10", deskripsi: "Koneksi instan ultra low latency harga ramah kantong pas di dompet." }
    ];

    // LocalStorage Initialization
    let productsList = JSON.parse(localStorage.getItem('mols_products'));
    if (!productsList || productsList.length === 0) {
        productsList = [...defaultProducts];
        localStorage.setItem('mols_products', JSON.stringify(productsList));
    }
    let cart = JSON.parse(localStorage.getItem('mols_cart')) || [];
    let orders = JSON.parse(localStorage.getItem('mols_orders')) || [];

    // ==========================================
    // 2. UTILS
    // ==========================================
    const formatRp = (angka) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    const showToast = (msg) => {
        const t = document.getElementById('toast');
        document.getElementById('toastMsg').textContent = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    };

    // ==========================================
    // 3. VANILLA JS ROUTING (MULTI-VIEW)
    // ==========================================
    const handleRoute = () => {
        let hash = window.location.hash || '#home';
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        const targetSection = document.getElementById(`view-${hash.substring(1)}`);
        if(targetSection) targetSection.classList.add('active');
        else document.getElementById('view-home').classList.add('active');
        
        const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if(activeLink) activeLink.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('navMenu').classList.remove('active'); // Close mobile menu
    };
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Scroll Effects
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
        document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
        });
    });

    // Mobile Toggle
    document.getElementById('mobileToggle').addEventListener('click', () => {
        document.getElementById('navMenu').classList.toggle('active');
    });

    // ==========================================
    // 4. RENDER PRODUCTS
    // ==========================================
    const createCard = (prod, isPromo = false) => {
        const badge = isPromo ? `<span class="badge-discount">Diskon 15%</span>` : `<span class="badge-category">${prod.kategori}</span>`;
        const hargaTampil = isPromo ? prod.harga * 0.85 : prod.harga;
        const hargaCoret = isPromo ? `<del class="text-muted" style="font-size:0.9rem;">${formatRp(prod.harga)}</del>` : '';
        
        return `
        <div class="product-card reveal-up active" onclick="openDetail(${prod.id})">
            ${badge}
            <div class="img-wrapper"><img src="${prod.gambar}" alt="${prod.nama}" class="product-img" loading="lazy"></div>
            <h3 class="product-name">${prod.nama}</h3>
            ${hargaCoret}
            <p class="product-price">${formatRp(hargaTampil)}</p>
            <div class="product-meta">
                <span><i class="fa-solid fa-star" style="color:gold;"></i> ${prod.rating}</span>
                <span>Stok: ${prod.stok}</span>
            </div>
            <div class="card-actions">
                <button class="btn btn-gradient w-100" onclick="event.stopPropagation(); openDetail(${prod.id})">Lihat Detail</button>
            </div>
        </div>`;
    };

    const renderCatalogs = () => {
        // Home: 4 Popular Items
        document.getElementById('popularProductsGrid').innerHTML = productsList.slice(0, 4).map(p => createCard(p)).join('');
        // Promo: 4 Random Items marked as Promo
        document.getElementById('promoProductsGrid').innerHTML = productsList.slice(10, 14).map(p => createCard(p, true)).join('');
        // Products Page: ALL items
        renderAllProducts(productsList);
    };

    const renderAllProducts = (data) => {
        const grid = document.getElementById('allProductsGrid');
        if(data.length === 0) grid.innerHTML = '<h3 class="text-center" style="grid-column:1/-1;">Produk tidak ditemukan.</h3>';
        else grid.innerHTML = data.map(p => createCard(p)).join('');
    };

    // Filter & Search Logic
    const filterAndSort = () => {
        const q = document.getElementById('searchInput').value.toLowerCase();
        const cat = document.getElementById('filterCategory').value;
        const sort = document.getElementById('sortSelect').value;
        
        let res = productsList.filter(p => (p.nama.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)) && (cat === 'Semua' || p.kategori === cat));
        if(sort === 'price-asc') res.sort((a,b) => a.harga - b.harga);
        if(sort === 'price-desc') res.sort((a,b) => b.harga - a.harga);
        if(sort === 'name-asc') res.sort((a,b) => a.nama.localeCompare(b.nama));
        
        renderAllProducts(res);
    };
    document.getElementById('searchInput').addEventListener('input', filterAndSort);
    document.getElementById('filterCategory').addEventListener('change', filterAndSort);
    document.getElementById('sortSelect').addEventListener('change', filterAndSort);

    renderCatalogs();

    // ==========================================
    // 5. DETAIL MODAL & CART
    // ==========================================
    const closeModals = () => document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', closeModals));

    window.openDetail = (id) => {
        const p = productsList.find(x => x.id === id);
        document.getElementById('detailImg').src = p.gambar;
        document.getElementById('detailBadge').textContent = p.kategori;
        document.getElementById('detailName').textContent = p.nama;
        document.getElementById('detailPrice').textContent = formatRp(p.harga);
        document.getElementById('detailRating').textContent = p.rating;
        document.getElementById('detailStock').textContent = p.stok;
        document.getElementById('detailDesc').textContent = p.deskripsi;
        
        document.getElementById('detailAddToCartBtn').onclick = () => { addToCart(id); closeModals(); };
        document.getElementById('productModal').classList.add('active');
    };

    const updateCartUI = () => {
        document.getElementById('cartBadge').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
        localStorage.setItem('mols_cart', JSON.stringify(cart));
    };

    const addToCart = (id) => {
        const p = productsList.find(x => x.id === id);
        if(p.stok <= 0) return showToast('Stok habis!');
        const ex = cart.find(i => i.id === id);
        if(ex) {
            if(ex.qty < p.stok) ex.qty++; else return showToast('Stok tidak mencukupi!');
        } else cart.push({ ...p, qty: 1 });
        updateCartUI();
        showToast(`${p.nama} masuk keranjang!`);
    };
    updateCartUI();

    // ==========================================
    // 6. MULTI-STEP CHECKOUT & PAYMENT FLOW
    // ==========================================
    const cartModal = document.getElementById('cartModal');
    let checkoutStep = 1;
    let currentSubtotal = 0;

    const renderCartStep = () => {
        const container = document.getElementById('cartItemsContainer');
        container.innerHTML = '';
        currentSubtotal = 0;
        if(cart.length === 0) {
            container.innerHTML = '<p class="text-center">Keranjang masih kosong.</p>';
            document.getElementById('btnNextToShipping').style.display = 'none';
        } else {
            document.getElementById('btnNextToShipping').style.display = 'inline-block';
            cart.forEach(item => {
                currentSubtotal += item.harga * item.qty;
                container.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.gambar}" alt="${item.nama}">
                        <div class="cart-info">
                            <h4>${item.nama}</h4>
                            <p class="gradient-text" style="font-weight:700;">${formatRp(item.harga)}</p>
                            <div class="cart-qty">
                                <button onclick="changeQty(${item.id}, -1)">-</button>
                                <span>${item.qty}</span>
                                <button onclick="changeQty(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="btn-remove" onclick="removeCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>`;
            });
        }
        document.getElementById('cartSubtotal').textContent = formatRp(currentSubtotal);
        document.getElementById('cartTotal').textContent = formatRp(currentSubtotal);
    };

    document.getElementById('openCartBtn').addEventListener('click', () => {
        setStep(1); renderCartStep(); cartModal.classList.add('active');
    });

    window.changeQty = (id, delta) => {
        const item = cart.find(i => i.id === id);
        if(item) {
            const prod = productsList.find(p => p.id === id);
            if(item.qty + delta > prod.stok) return showToast('Melebihi stok!');
            item.qty += delta;
            if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
            updateCartUI(); renderCartStep();
        }
    };
    window.removeCart = (id) => { cart = cart.filter(i => i.id !== id); updateCartUI(); renderCartStep(); };
    document.getElementById('clearCartBtn').addEventListener('click', () => { cart = []; updateCartUI(); renderCartStep(); });

    const setStep = (s) => {
        checkoutStep = s;
        document.querySelectorAll('.step').forEach(el => el.classList.toggle('active', parseInt(el.dataset.step) <= s));
        document.querySelectorAll('.checkout-step').forEach((el, idx) => {
            el.classList.toggle('active', idx + 1 === s);
        });
    };

    document.getElementById('btnNextToShipping').addEventListener('click', () => setStep(2));
    document.getElementById('btnBackToCart').addEventListener('click', () => setStep(1));
    
    document.getElementById('shippingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Setup Tagihan Payment
        document.getElementById('paySubtotal').textContent = formatRp(currentSubtotal);
        const adminFee = 2500, shippingFee = 25000;
        document.getElementById('payGrandTotal').textContent = formatRp(currentSubtotal + adminFee + shippingFee);
        setStep(3);
    });
    
    document.getElementById('btnBackToShipping').addEventListener('click', () => setStep(2));

    // Proses Pembayaran (Gateway Simulation & Deduct Stock)
    document.getElementById('btnProcessPayment').addEventListener('click', () => {
        const method = document.getElementById('paymentMethod').value;
        if(!method) return showToast('Pilih metode pembayaran!');

        // Deduct Stock
        cart.forEach(item => {
            const pIdx = productsList.findIndex(p => p.id === item.id);
            if(pIdx !== -1) productsList[pIdx].stok -= item.qty;
        });
        localStorage.setItem('mols_products', JSON.stringify(productsList));
        renderCatalogs(); // update grid

        // Create Order Record
        const orderId = 'ORD-' + Math.floor(Math.random() * 90000 + 10000);
        orders.push({
            id: orderId,
            pelanggan: document.getElementById('coName').value,
            total: currentSubtotal + 27500,
            metode: method,
            status: 'Lunas',
            tanggal: new Date().toLocaleDateString()
        });
        localStorage.setItem('mols_orders', JSON.stringify(orders));

        // Invoice View
        document.getElementById('invOrderId').textContent = orderId;
        document.getElementById('invMethod').textContent = method;

        // Clear Cart
        cart = []; updateCartUI();
        setStep(4);
    });

    document.getElementById('btnFinishOrder').addEventListener('click', closeModals);

    // Promo Countdown
    let cdDate = new Date().getTime() + (1 * 24 * 60 * 60 * 1000);
    setInterval(() => {
        let now = new Date().getTime(), distance = cdDate - now;
        if(distance > 0) {
            document.getElementById('cd-days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById('cd-hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById('cd-mins').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            document.getElementById('cd-secs').innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }
    }, 1000);
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // ==========================================
    // 7. COMPREHENSIVE ADMIN DASHBOARD
    // ==========================================
    document.getElementById('adminLoginBtn').addEventListener('click', () => document.getElementById('adminLoginModal').classList.add('active'));
    document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if(document.getElementById('adminUser').value === 'admin' && document.getElementById('adminPass').value === 'admin123') {
            closeModals(); showToast('Otentikasi Berhasil. Memuat Dashboard...');
            setTimeout(() => { document.getElementById('adminDashboardModal').classList.add('active'); openAdminDash(); }, 500);
        } else showToast('Kredensial Tidak Valid!');
    });

    const openAdminDash = () => {
        document.getElementById('dashTotalProduct').textContent = productsList.length;
        document.getElementById('dashPendingOrder').textContent = orders.length > 0 ? 0 : 2; // dummy info
        renderAdminProducts();
        renderAdminOrders();
        drawAdminChart();
    };

    // Admin Sidebar Tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-pane').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
            if(this.dataset.tab === 'tab-dash') drawAdminChart();
        });
    });

    // Admin Render Products
    const renderAdminProducts = () => {
        const tbody = document.getElementById('adminProductsTbody');
        tbody.innerHTML = productsList.map(p => `
            <tr>
                <td>${p.id}</td>
                <td><strong>${p.nama}</strong><br><small class="text-muted">${p.brand}</small></td>
                <td><span class="badge-category" style="position:static;">${p.kategori}</span></td>
                <td>${formatRp(p.harga)}</td>
                <td>${p.stok}</td>
                <td>
                    <button class="btn btn-sm btn-outline" onclick="editProduct(${p.id})"><i class="fa-solid fa-edit"></i></button>
                    <button class="btn btn-sm btn-gradient" style="background:var(--danger);" onclick="deleteProduct(${p.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    };

    // Admin Render Orders
    const renderAdminOrders = () => {
        const tbody = document.getElementById('adminOrdersTbody');
        if(orders.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada transaksi.</td></tr>';
        } else {
            tbody.innerHTML = orders.map(o => `
                <tr>
                    <td><strong>${o.id}</strong><br><small>${o.tanggal}</small></td>
                    <td>${o.pelanggan}</td>
                    <td class="gradient-text" style="font-weight:700;">${formatRp(o.total)}</td>
                    <td>${o.metode}</td>
                    <td><span class="badge-success">${o.status}</span></td>
                </tr>
            `).reverse().join('');
        }
    };

    // CRUD Product Logic
    document.getElementById('btnAddNewProduct').addEventListener('click', () => {
        document.getElementById('crudForm').reset();
        document.getElementById('crudId').value = '';
        document.getElementById('productFormTitle').textContent = 'Tambah Produk Baru';
        document.getElementById('productFormModal').classList.add('active');
    });

    document.getElementById('crudForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('crudId').value;
        const prod = {
            id: id ? parseInt(id) : Date.now(),
            nama: document.getElementById('crudNama').value,
            kategori: document.getElementById('crudKategori').value,
            brand: document.getElementById('crudBrand').value,
            harga: parseInt(document.getElementById('crudHarga').value),
            stok: parseInt(document.getElementById('crudStok').value),
            gambar: document.getElementById('crudGambar').value,
            deskripsi: document.getElementById('crudDeskripsi').value,
            rating: 5.0
        };

        if(id) {
            const idx = productsList.findIndex(p => p.id === parseInt(id));
            productsList[idx] = prod;
            showToast('Produk Diperbarui!');
        } else {
            productsList.unshift(prod);
            showToast('Produk Ditambahkan!');
        }

        localStorage.setItem('mols_products', JSON.stringify(productsList));
        renderAdminProducts(); renderCatalogs();
        document.getElementById('dashTotalProduct').textContent = productsList.length;
        document.getElementById('productFormModal').classList.remove('active');
    });

    window.editProduct = (id) => {
        const p = productsList.find(x => x.id === id);
        document.getElementById('crudId').value = p.id;
        document.getElementById('crudNama').value = p.nama;
        document.getElementById('crudKategori').value = p.kategori;
        document.getElementById('crudBrand').value = p.brand;
        document.getElementById('crudHarga').value = p.harga;
        document.getElementById('crudStok').value = p.stok;
        document.getElementById('crudGambar').value = p.gambar;
        document.getElementById('crudDeskripsi').value = p.deskripsi;
        document.getElementById('productFormTitle').textContent = 'Edit Produk';
        document.getElementById('productFormModal').classList.add('active');
    };

    window.deleteProduct = (id) => {
        if(confirm('Hapus produk ini secara permanen?')) {
            productsList = productsList.filter(p => p.id !== id);
            localStorage.setItem('mols_products', JSON.stringify(productsList));
            renderAdminProducts(); renderCatalogs();
            document.getElementById('dashTotalProduct').textContent = productsList.length;
            showToast('Produk Dihapus.');
        }
    };
    document.getElementById('closeFormProduct').addEventListener('click', () => document.getElementById('productFormModal').classList.remove('active'));
    document.getElementById('adminLogoutBtn').addEventListener('click', closeModals);

    // Chart.js Replacement - Vanilla Canvas Bar Chart (Gradient)
    function drawAdminChart() {
        const canvas = document.getElementById('salesChart');
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        const data = [65, 80, 50, 120, 90, 150, 110]; // Sales trend dummy
        const max = Math.max(...data);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = canvas.width / data.length;
        
        data.forEach((val, i) => {
            const h = (val / max) * canvas.height * 0.8;
            const x = i * barWidth + 5;
            const y = canvas.height - h;
            
            const grad = ctx.createLinearGradient(0, y, 0, canvas.height);
            grad.addColorStop(0, '#00f2fe');
            grad.addColorStop(1, '#ec4899');
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth - 10, h, [4, 4, 0, 0]);
            ctx.fill();
        });
    }
});