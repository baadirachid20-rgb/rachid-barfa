// فتح نافذة الطلب المباشر
function openOrderModal(perfumeName, perfumePrice) {
    document.getElementById('modalPerfumeName').value = perfumeName;
    document.getElementById('modalPerfumePrice').value = perfumePrice;
    document.getElementById('orderModal').style.display = 'flex';
}

// إغلاق نافذة الطلب
function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    var modal = document.getElementById('orderModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// إرسال البيانات المباشر إلى WhatsApp
function sendToWhatsApp(event) {
    event.preventDefault();

    // رقم الواتساب الخاص بـ Rachid Barfa
    var phoneNumber = "212690090698";

    // جلب البيانات من النموذج
    var perfume = document.getElementById('modalPerfumeName').value;
    var price = document.getElementById('modalPerfumePrice').value;
    var name = document.getElementById('clientName').value;
    var city = document.getElementById('clientCity').value;
    var phone = document.getElementById('clientPhone').value;

    // صياغة الرسالة المنظمة للواتساب
    var message = "السلام عليكم ورحمة الله، أريد تأكيد طلب عطر من موقع RACHID BARFA:\n\n" +
                  "📌 *العطر المطلوب:* " + perfume + "\n" +
                  "💰 *الثمن:* " + price + "\n" +
                  "👤 *الاسم الكامل:* " + name + "\n" +
                  "🏙️ *المدينة:* " + city + "\n" +
                  "📞 *رقم الهاتف:* " + phone + "\n\n" +
                  "المرجو تأكيد الطلب والتوصيل في أقرب وقت وشكراً!";

    // ترميز النص للرابط
    var encodedMessage = encodeURIComponent(message);
    
    // إنشاء رابط الواتساب والفتح فأنفذة جديدة
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    
    window.open(whatsappURL, '_blank');

    // إعادة ضبط النموذج وإغلاق النافذة
    document.getElementById('orderForm').reset();
    closeOrderModal();
}
