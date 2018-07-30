export function apiResponse(res, message = "", code = 200, success = true) {
    res.send({
        success,
        data: message instanceof Error ? message.toString() : message,
    }, code);
}

export const googleDetails = {
    "type": "service_account",
    "project_id": "zupport-desk-test",
    "private_key_id": "5f3d812eb30159095a78802d3d42dbfe8d6b91f2",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChEz2O715RGtap\nIQKRdUcSWlk8d9iWu9w9KhI+88IIWHmgVi5vmXzRGyZpPBz97znH3pZBP3XbRkWq\nQGmf+nXhFbPlOmfaKaPAaYTvAYy5gRisA6+5e2eaoiXC3w44zIyaIDIjWQVrE2jQ\nIAhqtKtfUejLSZBPfV0SAEA2f+YlFKtmoAz2so4/EtUZ0PJ4esIbaSPYj0EYKY3i\nTR/4V4W4ZUrom2w0xV88BFj5KNE+GfHoCt0iycxsB2OzvoZ7UkBP1qsZE7jrsLUo\nsPH5/sf78mtmRCBGZsO8tATk7qlDw9GmeLOPT5t89b2xY5Z60YHDTECZEuUL3Tb7\n5f1rnGwJAgMBAAECggEAG6QwH6u/LT7kUIDMLocIK8OaZbCRWAij+lEScYAmL4Vz\nVcsES/10eHPmyw9YUFFxwnVVppvLz1XHVbiZB62U9gvh47f6o2sa4UWaXOOQsTLQ\nt5AoYzWkqVojDcZ2a9PaWwakZAF+VwotJe4hU6JueDyXrO8SVznFs3Wcj12ycnFM\nQoFBO+skS4vwgtQ+KzYhJ8/1Lf5WxJNFhhCUtgeGibT44bdkiyl7iDf/sn2YkafT\nKCnRO1M6C6VvORVTZpkozaPIfjUkvgxklXVb353kTWmSQWOA27M8x7IhmY6MbyNq\nlWF/otpuLQCIpdTsnUuT8U65yrtRMBSTt4AatcswOwKBgQDYyynPCqipAO6e96hw\nSrCB9PhZYy6tPZJQMW8DXP8Lm5GtRXzHcTV+5+fqRzy8D2jhIyMDpk0xoas1F0Oa\nixkHXcAMVHB3Xpc0yK7DYaRM4GuIaDk1a5bh5Hi+Z1m9OZl61Mi4hgbNSVq3+Dxm\nhPkhCCjRV+0IDCXjqBDTTuOyMwKBgQC+NH6om0eWt/7ynQOH2Qm3QcmNzv5LPjXn\n21FLuRRhi+KjGI6p/JfcjofZ6ELl6Pjc9i/2x0738CWCWsZSv1+gEKJEFPyZvZqN\nHTZ+j5KJJSiLCdbUs7n2VSHU1RnGwBClfcs6Iz5hKKES5P4FuCGfY0VTbZnRZ1ZF\nLcE+DflE0wKBgA0joxENUFON3uh7khXcMP5vXm3sePO++5Moq9XEWSDW+OlLgNiF\nn/xlCcVFNAUh2fVrL8AU4DDV346ELnC7ZXTw1abppzdU4E0urIji7hZKs7m8t1rp\nfmeKdVb05Jd3Wjn7k367gMYIYBsuTFraTE8YM4Eclx0Zv2Ig2YQ1D8/JAoGAT5pg\nt+fk2is/RAJ6i8xFyLB7ziGnQ45RuSuMpohbA0gsHd4VNwdD90afjI8sEFSkcrWF\n9V4Mqq+Swy+CePcm6jKL9rphzWYQ3KYxPF6SEVu/0BDaHELrvTB77DsTgp63WMuA\n1mARp0/9uY6k0XfyemZtiTEBgyYgcOtpSLNIc4kCgYEA2BYCGgo+y3/kpVYRr32u\nnU83tPSUFenSHUW1Bpp+vmYwLBIfDFOUYtQlD0nP6dJpQtYh0OuFXckCrBeQoFLD\nWOJ0/AxvRF295Q+KsGNO+1pfzizY5LHds+tr2wJnUdjlHm2JeOm7b2akNipSbCso\nq5H4VtpAVboTDpLQhNXFKrw=\n-----END PRIVATE KEY-----\n",
    "client_email": "nodejssdk@zupport-desk-test.iam.gserviceaccount.com",
    "client_id": "111846877945558670662",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/nodejssdk%40zupport-desk-test.iam.gserviceaccount.com"
};