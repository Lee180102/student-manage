<template>
  <div>
    <div>
      <el-button type="primary" @click="dialogVisible = true">学生新增</el-button>
    </div>
    <el-table :data="studentInformationtList">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="school" label="学校"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="registrationTime" label="报名时间"></el-table-column>
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
        <el-form :model="studentInformation" :rules="rules" style="margin: 0 20px ">
          <el-form-item label="姓    名" :label-width="formLabelWidth" prop="name">
            <el-input v-model="studentInformation.name" placeholder></el-input>
          </el-form-item>
          <el-form-item label="性    别" :label-width="formLabelWidth" prop="gender">
            <el-select v-model="studentInformation.gender">
              <el-option
                v-for="item in options.gender"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年    龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model.number="studentInformation.age" type="age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="报名时间" :label-width="formLabelWidth" prop="registrationTime">
            <el-date-picker
              v-model="studentInformation.registrationTime"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="学    校" :label-width="formLabelWidth" prop="school">
            <el-input v-model="studentInformation.school" placeholder></el-input>
          </el-form-item>
          <el-form-item label="年    级" :label-width="formLabelWidth" prop="grade">
            <el-input v-model="studentInformation.grade" placeholder></el-input>
          </el-form-item>
          <el-form-item label="住    址" :label-width="formLabelWidth" prop="address">
            <el-input v-model="studentInformation.address" placeholder></el-input>
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
  name: "StudentInformation",
  data() {
    return {
      studentInformation: {
        name: null,
        gender: null,
        age: null,
        school: null,
        grade: null,
        address: null,
        registrationTime: null
      },
      studentInformationtList: [],
      search: null,
      dialogVisible: false,
      formLabelWidth: "80px",
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        age: [
          { required: true, message: "年龄不能为空", trigger: "blur" },
          { type: "number", message: "年龄必须为数字值", trigger: "blur" }
        ],
        registrationTime: [
          { required: true, message: "请选择报名时间", trigger: "blur" }
        ]
      },
      options: {
        gender: [
          {
            value: 0,
            label: "男"
          },
          {
            value: 1,
            label: "女"
          }
        ]
      }
    };
  }
};
</script>

