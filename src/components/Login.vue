<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="密  码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
        };
    },
};
</script>

