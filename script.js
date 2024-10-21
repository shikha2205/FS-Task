document.addEventListener('DOMContentLoaded', function() {
    const subjects = document.querySelectorAll('.subject');
    const teacherModal = new bootstrap.Modal(document.getElementById('teacherModal'));
    const teacherName = document.getElementById('teacherName');
    const teacherSubject = document.getElementById('teacherSubject');
    const teacherEmail = document.getElementById('teacherEmail');
    const teacherPhone = document.getElementById('teacherPhone');
    const contactTeacherBtn = document.getElementById('contactTeacher');

    
    const teacherDetails = {
        'shikha': { email: 'ananya@example.com', phone: '123-456-7890' },
        'Jane Smith': { email: 'jane.smith@example.com', phone: '098-765-4321' },
        'ananya': { email: 'ananya@example.com', phone: '555-555-5555' },    
        'harsita': { email: 'harsita@example.com', phone: '666-666-6666' }  
    };

    subjects.forEach(subject => {
        subject.addEventListener('click', function() {
            const teacher = this.dataset.teacher;
            const subjectName = this.dataset.subject;
            
            
            if (teacherDetails[teacher]) {
                teacherName.textContent = teacher;
                teacherSubject.textContent = subjectName;
                teacherEmail.textContent = teacherDetails[teacher].email;
                teacherPhone.textContent = teacherDetails[teacher].phone;

                teacherModal.show();
            } else {
                console.log('Teacher details not found for:', teacher);
            }
        });
    });

    contactTeacherBtn.addEventListener('click', function() {
        const email = teacherEmail.textContent;
        window.location.href = `mailto:${email}`;
    });
});
