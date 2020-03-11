<template>
    <input
        ref="loader"
        type="file" multiple
        @change="onFileChange($event.target.files)"
        :accept="accept" style="display:none"
    >
</template>

<script>
    export default {
        props: {
            accept: String,
            inputName: String,
            validFileTypes: Array
        },
        data: ()=>{
            return {
                counter: 0
            };
        },
        computed: {
            fileName() {
                return this.inputName + '[' + this.counter + ']';
            }
        },
        methods: {
            onFileChange(files) {
                /**
                 * Vue-Toastr
                 */
                this.$toastr.i('Загрузка файлов');
                if (files.length > 0) {
                    let data = {files: []};
                    let invalid = false;``
                    const validFileTypes = this.validFileTypes || ['gif', 'jpg', 'jpeg', 'png'];

                    for(let file of files) {
                        if (!validFileTypes.includes(file.name.split('.').pop())) {
                            invalid = true;
                            continue;
                        }
                        let fileURL = URL.createObjectURL(file);
                        data.files.push({id: this.counter, name: this.fileName, url: fileURL, file: file});
                        this.counter++;
                    }

                    if(invalid) {
                        this.$toastr.w('Доступный формат файлов : ' + validFileTypes.join(', '));
                    }

                    if(data.files.length > 0) {
                        this.$emit('input', data.files);
                    }
                }
                this.$refs.loader.value = "";
            },
            getCounter() {
                return this.counter++;
            }
        }
    }
</script>