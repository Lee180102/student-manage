<template>
  <div>
    <div>
      <el-button type="primary" @click="dialogVisible = true">教师新增</el-button>
    </div>
    <el-table :data="teacherInformationtList">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="educationBackground " label="学历"></el-table-column>
      <el-table-column prop="school" label="毕业院校"></el-table-column>
      <el-table-column prop="major" label="专业"></el-table-column>
      <el-table-column type="expand"></el-table-column>
    </el-table>

    <div>
      <el-dialog
        center
        title="学生新增"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-form :model="teacherInformation" style="margin: 0 20px ">
          <el-form-item label="姓 名" :label-width="formLabelWidth">
            <el-input v-model="teacherInformation.name" placeholder></el-input>
          </el-form-item>
          <el-form-item label="性 别" :label-width="formLabelWidth">
            <el-input v-model="teacherInformation.gender" placeholder></el-input>
          </el-form-item>
          <el-form-item
            label="年 龄"
            :label-width="formLabelWidth"
            :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
          >
            <el-input v-model.number="teacherInformation.age" placeholder type="age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="学历" :label-width="formLabelWidth">
            <el-input v-model="teacherInformation.educationBackground" placeholder></el-input>
          </el-form-item>
          <el-form-item label="毕业院校" :label-width="formLabelWidth">
            <el-input v-model="teacherInformation.school" placeholder></el-input>
          </el-form-item>
          <el-form-item label="专业" :label-width="formLabelWidth">
            <el-input v-model="teacherInformation.major" placeholder></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherInformation",
  data() {
    return {
      teacherInformation: {
        name: null,
        gender: null,
        age: null,
        educationBackground: null,
        school: null,
        major: null
      },
      teacherInformationtList: [],
      search: null,
      dialogVisible: false,
      formLabelWidth: "80px"
    };
  }
};
</script>

