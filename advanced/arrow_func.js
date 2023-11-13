let group = {
    title: 'Rockstars',
    students: ['onkar', 'akash', 'imran'],
    show() {
        this.students.forEach(student => {
            console.log(`${this.title} - ${student}`)
        })
    }
}
group.show()