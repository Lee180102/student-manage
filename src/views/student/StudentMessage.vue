<template>
  <div>
    <div>
      <el-button type="primary" @click="dialogVisible = true">学生新增</el-button>
    </div>
    <el-table :data="studentMessagetList">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="school" label="学校"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
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
        <el-form :model="studentMessage" style="margin: 0 20px ">
          <el-form-item label="姓 名" :label-width="formLabelWidth">
            <el-input v-model="studentMessage.name" placeholder></el-input>
          </el-form-item>
          <el-form-item label="性 别" :label-width="formLabelWidth">
            <el-input v-model="studentMessage.gender" placeholder></el-input>
          </el-form-item>
          <el-form-item
            label="年 龄"
            :label-width="formLabelWidth"
            :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
          >
            <el-input v-model.number="studentMessage.age" placeholder type="age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="学 校" :label-width="formLabelWidth">
            <el-input v-model="studentMessage.school" placeholder></el-input>
          </el-form-item>
          <el-form-item label="住 址" :label-width="formLabelWidth">
            <el-input v-model="studentMessage.address" placeholder></el-input>
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
  name: "StudentMessage",
  data() {
    return {
      studentMessage: {
        name: null,
        gender: null,
        age: null,
        school: null,
        address: null
      },
      studentMessagetList: [],
      search: null,
      dialogVisible: false,
      formLabelWidth: "60px"
    };
  }
};
</script>

