

  <!-- 环境因子の作业汇总表 start -->

  <table v-show="tabIndex == 6 || tabBlock[6] == 6" class="table new-table" cellspacing="0" cellpadding="0" border="1" width="100%" style="margin-top: 0.2rem;">
    <tr>
      <td rowspan="8" class="head-bg" style="width: 0.5rem;">{{$t('evaluate.ambient.factor')}}</td>
      <td class="head-bg"></td>
      <td class="head-bg">{{$t('evaluate.ambient.topic')}}</td>
      <td class="head-bg" colspan="2">{{$t('evaluate.psychosomaticFunction.status')}}</td>
      <td class="head-bg">{{$t('evaluate.ambient.layoutRoom')}}</td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.essentialInfo.family')}}</td>
      <td class="head-bg">
       <CheckboxGroup v-model="old_divisor.divisorTopic.topic1">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td colspan="2">
        <RadioGroup v-model="old_divisor.divisorFamily.bool">
          <Radio label="0" @mouseup.native="ondivisorFamilyNull('0')">{{$t('evaluate.ambient.liveAlone')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorFamilyNull('1')">{{$t('evaluate.ambient.couple')}}</Radio>
          <Radio label="2" @mouseup.native="ondivisorFamilyNull('2')">{{$t('evaluate.foodMedicine.other')}}</Radio>
          (<Input type="textarea" autosize v-model="old_divisor.divisorFamily.content" class="new-width-input " style="width: 25%;" />)
        </RadioGroup>
      </td>
      <td rowspan="3">
        <!-- 拖拽start -->
        <div id="capture">

          <div class="drag-header">

            <div class="drag-div1" :class="{'move-opacity' : !drag_list[0].bool}" @click="drag_list[0].bool = !drag_list[0].bool">
              <p style="font-size:0.08rem;white-space:nowrap;">{{$t('evaluate.new.Bed')}}</p>
              <img :src="imgSrc1" style="width:0.25rem;height:0.25rem;">
            </div>

            <div class="drag-div2" :class="{'move-opacity' : !drag_list[1].bool}" @click="drag_list[1].bool = !drag_list[1].bool">
              <p style="font-size:0.08rem;">{{$t('evaluate.new.Desk')}}</p>
              <img :src="imgSrc2" style="width:0.20rem;height:0.25rem;">
            </div>

            <div class="drag-div3" :class="{'move-opacity' : !drag_list[2].bool}" @click="drag_list[2].bool = !drag_list[2].bool">
              <p style="font-size:0.08rem;white-space:nowrap;">{{$t('evaluate.new.Car')}}</p>
              <img :src="imgSrc3" style="border:none;width:0.30rem;height:0.25rem;">
            </div>

            <div class="drag-div4" :class="{'move-opacity' : !drag_list[3].bool}" @click="drag_list[3].bool = !drag_list[3].bool">
              <p style="font-size:0.08rem;white-space:nowrap;">{{$t('evaluate.new.TV')}}</p>
              <img :src="imgSrc4" style="width:0.02rem;height:0.25rem;">
            </div>
            <div style="display:none;" class="drag-div5" :class="{'move-opacity' : !drag_list[4].bool}" @click="drag_list[4].bool = !drag_list[4].bool">

            </div>
            <div style="display:none;" class="drag-div6" :class="{'move-opacity' : !drag_list[5].bool}" @click="drag_list[5].bool = !drag_list[5].bool">

            </div>
          </div>
          <div class="drag-content">
            <div :class="{'move-none' : drag_list[0].bool}" ref="div1" id="drag-div1" draggable="true"></div>
            <div :class="{'move-none' : drag_list[1].bool}" ref="div2" id="drag-div2" draggable="true"></div>
            <div :class="{'move-none' : drag_list[2].bool}" ref="div3" id="drag-div3" draggable="true"></div>
            <div :class="{'move-none' : drag_list[3].bool}" ref="div4" id="drag-div4" draggable="true"></div>
            <div style="display:none;" :class="{'move-none' : drag_list[4].bool}" ref="div5" id="drag-div5" draggable="true"></div>
            <div style="display:none;" :class="{'move-none' : drag_list[5].bool}" ref="div6" id="drag-div6" draggable="true"></div>
          </div>

        </div>
        <!-- 拖拽end -->

      </td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.welfare')}}</td>
      <td class="head-bg">
        <CheckboxGroup v-model="old_divisor.divisorTopic.topic2">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td>
        <CheckboxGroup v-model="old_divisor.divisorEquipment" style="display:flex;">
          <p style="white-space:nowrap;">
            <Checkbox label="0">{{$t('evaluate.ambient.stick')}}</Checkbox>
            <br/>
            <Checkbox label="4">{{$t('evaluate.ambient.handrail')}}</Checkbox>
            <br/>
            <Checkbox label="7">{{$t('evaluate.ambient.hill')}}</Checkbox>
          </p>

          <p style="white-space:nowrap;">
            <Checkbox label="1">{{$t('evaluate.new.Armor')}}</Checkbox>
            <br/>
            <Checkbox label="5">{{$t('evaluate.ambient.bed')}}</Checkbox>
          </p>

          <p style="white-space:nowrap;">
          <Checkbox label="2">{{$t('evaluate.ambient.orthosis')}}</Checkbox>
          <Checkbox label="3">{{$t('evaluate.ambient.walkerAid')}}</Checkbox>
          <br/>
          <Checkbox label="6">{{$t('evaluate.ambient.portableToilet')}}</Checkbox>
          </p>
        </CheckboxGroup>
      </td>
      <td class="block">
        <p class="">{{$t('evaluate.ambient.adjustment')}}</p>
        <RadioGroup v-model="old_divisor.divisorEquipmentAdjust" class="">
          <Radio label="0" @mouseup.native="ondivisorEquipmentAdjustNull('0')">{{$t('evaluate.ambient.adjusted')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorEquipmentAdjustNull('1')">{{$t('evaluate.ambient.unadjusted')}}</Radio>
        </RadioGroup>
      </td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.carer')}}</td>
      <td class="head-bg">
          <CheckboxGroup v-model="old_divisor.divisorTopic.topic3">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td>
        <RadioGroup v-model="old_divisor.divisorNurse">
          <Radio label="0" @mouseup.native="ondivisorNurseNull('0')">{{$t('evaluate.foodMedicine.no')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorNurseNull('1')">{{$t('evaluate.foodMedicine.have')}}</Radio>
        </RadioGroup>
      </td>
      <td rowspan="2" class="block">
        <p class="">{{$t('evaluate.ambient.adjustment')}}</p>
        <RadioGroup v-model="old_divisor.divisorNurseAdjust" class="">
          <Radio label="0" @mouseup.native="ondivisorNurseAdjustNull('0')">{{$t('evaluate.ambient.adjusted')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorNurseAdjustNull('1')">{{$t('evaluate.ambient.unadjusted')}}</Radio>
        </RadioGroup>
      </td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.assistance')}}</td>
      <td class="head-bg">
           <CheckboxGroup v-model="old_divisor.divisorTopic.topic4">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td>
        <RadioGroup v-model="old_divisor.divisorNurseAssist">
          <Radio label="0" @mouseup.native="ondivisorNurseAssistNull('0')">{{$t('evaluate.foodMedicine.no')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorNurseAssistNull('1')">{{$t('evaluate.foodMedicine.have')}}</Radio>
        </RadioGroup>
      </td>
      <td class="head-bg">{{$t('evaluate.foodMedicine.subject')}}</td>
    </tr>
    <tr class="block">
      <td class="head-bg">{{$t('evaluate.ambient.living')}}</td>
      <td class="head-bg">
       <CheckboxGroup v-model="old_divisor.divisorTopic.topic5">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td style="font-size:14px;">
        <!-- 重构 start   -->
        <CheckboxGroup v-model="old_divisor.divisorDwelling.bool">
          <!-- 新增字段 一戸建 start -->
          <Checkbox label="0">{{$t('evaluate.new.Ichinohe_Ken')}}</Checkbox>
          <!-- 新增字段 一戸建 end -->
          <div style="display:flex;align-items:center;">
            <Checkbox label="1">{{$t('evaluate.ambient.detached')}}</Checkbox>(
            <Input type="textarea" autosize v-model="old_divisor.divisorDwelling.content1" class="new-width-input " style="width:25%;" />
            {{$t('evaluate.ambient.floor')}} )
          </div>
        
             <Checkbox label="2">{{$t('evaluate.ambient.stairs')}}</Checkbox>
             <Checkbox label="3">{{$t('evaluate.ambient.elevator')}}</Checkbox>
  
          
          <div style="display:flex;align-items:center;">
            <Checkbox label="4">{{$t('evaluate.ambient.handrail')}}</Checkbox>
            ( {{$t('evaluate.ambient.clothingLocation')}}:
            <Input type="textarea" autosize v-model="old_divisor.divisorDwelling.content2" class="new-width-input " style="width:25%;" />)
          </div>


         <div style="display:flex;"> 
           <p>
              {{$t('evaluate.ambient.board')}}
              <br>
              {{$t('evaluate.ambient.closestool')}}
          </p>
          <p>
             (
             <br/>
             (
          </p>

          <p>
            <Checkbox label="5">{{$t('evaluate.ambient.desk')}}</Checkbox>
            <Checkbox label="7">{{$t('evaluate.ambient.western')}}</Checkbox>
          </p>

          <div>
             <p><Checkbox label="6">{{$t('evaluate.new.Table')}} ● {{$t('evaluate.ambient.chair')}}</Checkbox> 
              <p style="display:flex;">
               <Checkbox label="8">{{$t('evaluate.ambient.japanese')}}</Checkbox>
               <Checkbox label="9">{{$t('evaluate.ambient.handToilet')}}</Checkbox>
             </p>
          </div>
          <p>
              )
              <br/>
              )
          </p>
         </div>
    
        </CheckboxGroup>

        <!-- 重构 end   -->
      </td>
      <td>
        <p class="">{{$t('evaluate.ambient.adjustment')}}</p>
        <RadioGroup v-model="old_divisor.divisorDwellingAdjust" class="">
          <Radio label="0" @mouseup.native="ondivisorDwellingAdjustNull('0')">{{$t('evaluate.ambient.adjusted')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorDwellingAdjustNull('1')">{{$t('evaluate.ambient.renovation')}}</Radio>
          <Radio label="2" @mouseup.native="ondivisorDwellingAdjustNull('2')">{{$t('evaluate.ambient.unadjusted')}}</Radio>
        </RadioGroup>
      </td>
      <td rowspan="3">
        <i-input type="textarea" :autosize="{minRows: 8}"   class="" v-model="old_divisor.divisorRoomLayoutB" :placeholder="$t('evaluate.foodMedicine.enter')"></i-input>
      </td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.volume')}}</td>
      <td class="head-bg">
          <CheckboxGroup v-model="old_divisor.divisorTopic.topic6">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
       </CheckboxGroup>
      </td>
      <td colspan="2">
        <RadioGroup v-model="old_divisor.divisorTraffic">
          <Radio label="0" @mouseup.native="ondivisorTrafficNull('0')">{{$t('evaluate.new.Many')}}</Radio>
          <Radio label="1" @mouseup.native="ondivisorTrafficNull('1')">{{$t('evaluate.new.Few')}}</Radio>
        </RadioGroup>
      </td>
    </tr>
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.social')}}</td>
      <td class="head-bg">
        <CheckboxGroup v-model="old_divisor.divisorTopic.topic7">
          <Checkbox label="0" style="margin-left:0.05rem;">{{$t('evaluate.new.nbsp')}}</Checkbox>
        </CheckboxGroup>
      </td>
      <td colspan="2">
        <Input type="textarea" autosize v-model="old_divisor.divisorSocial" class="new-width-input" style="width: 100%;" />
      </td>
    </tr>
  </table>

  <table v-show="tabIndex == 6 || tabBlock[6] == 6" class="table new-table" cellspacing="0" cellpadding="0" border="1" width="100%" style="margin-top: 0.2rem;">
    <tr>
      <td class="head-bg" rowspan="8" style="width: 0.5rem">{{$t('evaluate.new.Summary')}}</td>
      <td class="head-bg">{{$t('evaluate.foodMedicine.prospect')}}</td>
      <td colspan="3">
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summarySense" class="new-width-input" style="width: 100%;" />
        </div>
      </td>
    </tr>
    <tr>
      <td class="head-bg" rowspan="3" style="width: 1.5rem;">{{$t('evaluate.topics.title3')}}</td>
      <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryProblemsA" class="new-width-input" style="width: 100%;" />
        </div>
      </td>
      <td rowspan="3" class="head-bg">
        {{$t('evaluate.ambient.priority')}}
      </td>
      <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryPriorityA" class="new-width-input" style="width: 100%;" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryProblemsB" class="new-width-input" style="width: 100%;" />
        </div>
      </td>

       <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryPriorityB" class="new-width-input" style="width: 100%;" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryProblemsC" class="new-width-input" style="width: 100%;" />
        </div>
      </td>

       <td>
        <div class="cell">
          <Input type="textarea" autosize v-model="old_divisor.summaryPriorityC" class="new-width-input" style="width: 100%;" />
        </div>
      </td>
    </tr>
    
    <tr>
      <td class="head-bg">{{$t('evaluate.ambient.risk')}}</td>
      
      <td colspan="3">
        <div class="cell">
          <CheckboxGroup v-model="old_divisor.summaryRisk" style="display:flex;">
             
            <p>
              <Checkbox label="0">{{$t('evaluate.topics.title6')}}</Checkbox>
              <br/>
              <Checkbox label="3">{{$t('evaluate.topics.title9')}}</Checkbox>
              <br/>
              <Checkbox label="5">{{$t('evaluate.topics.title11')}}</Checkbox>
              <br/>
              <Checkbox label="7">{{$t('evaluate.topics.title13')}}</Checkbox>
              <br/>
              <Checkbox label="8">{{$t('evaluate.topics.title14')}}</Checkbox>
            </p>

            <p>
              <Checkbox label="1">{{$t('evaluate.topics.title7')}}</Checkbox>
              <br/>
              <Checkbox label="4">{{$t('evaluate.topics.title10')}}</Checkbox>
              <br/>
              <Checkbox label="6">{{$t('evaluate.topics.title12')}}</Checkbox>
            </p>
    
            <p>
               <Checkbox label="2">{{$t('evaluate.topics.title8')}}</Checkbox>
            </p>
          </CheckboxGroup>
        </div>
      </td>
       
    </tr>
  </table>
  <!-- 环境因子の作业汇总表 end -->

  

<script>
import {
  selectInofList,
  insertInfoSave,
  updateInfo,
  selectEatList,
  selectEatListAll,
  insertEatSave,
  updateEat,
  selectMoveList,
  selectMoveListAll,
  insertMoveSave,
  updateMove,
  selectBatheList,
  selectBatheListAll,
  innsetBatheSave,
  updateBathe,
  selectPhysiologyList,
  selectPhysiologyListAll,
  innsetPhysiologySave,
  updatePhysiology,
  selectDivisorList,
  selectDivisorListAll,
  innsetDivisorSave,
  updateDivisor,
  selectExcretion,
  insertExcretion,
  updateExcretion ,
  getDateById ,
  selectExcretionList ,
  selectInofQuery
} from "../network/every";
import {
  sendUploadBase,
  getBaseInfo
} from "../network/Sinyu";
import qs from "qs";
import Vue from "vue";
import html2canvas from "html2canvas";
import {
  imgTo,
  format
} from "../assets/utils/Tools";
import {
  BASE_URL
} from "../network/http";

export default {
  data() {
    return {
     
      imgSrc1: null,
      imgSrc2: null,
      imgSrc3: null,
      imgSrc4: null,
      self_man: null,
      self_woman: null,
      cancelIndex: 0,
      oldId: "",
      tabList: [
        "evaluate.tabList.essentialInfoTab",
        "evaluate.tabList.foodMedicineTab",
        'evaluate.tabList.mobileTrauma',
        "evaluate.excretion.criticism1",
        "evaluate.tabList.bathingChangingTab",
        "evaluate.tabList.psychosomaticTab",
        "evaluate.tabList.ambientTab",
      ],
      tabIndex: 0,
      // 环境因子+作业汇总表
      old_divisor: {
        divisorTopic:{
          topic1:[] , 
          topic2:[] , 
          topic3:[] , 
          topic4:[] , 
          topic5:[] , 
          topic6:[] , 
          topic7:[] 
        } ,
        assessmentInfoId: 0,
        divisorDwelling: {
          bool: [],
          content1: "",
          content2: ""
        },
        divisorDwellingAdjust: "",
        divisorEquipment: [],
        divisorEquipmentAdjust: "",
        divisorFamily: {
          bool: "",
          content: ""
        },
        divisorNurse: "",
        divisorNurseAdjust: "",
        divisorNurseAssist: "",
        divisorRoomLayoutA: "",
        divisorRoomLayoutB: "",
        divisorSocial: "",
        divisorTraffic: "",
        id: "",
        oldManId: 1,
        summaryPriorityA: "",
        summaryPriorityB: "",
        summaryPriorityC: "",
        summaryProblemsA: "",
        summaryProblemsB: "",
        summaryProblemsC: "",
        summaryProblemsD: "",
        summaryRisk: [],
        summarySense: ""

      },
      old_divisor_id:"环境id" ,
      // 初始化数据
      copy_old_divisor: {
         divisorTopic:{
          topic1:[] , 
          topic2:[] , 
          topic3:[] , 
          topic4:[] , 
          topic5:[] , 
          topic6:[] , 
          topic7:[] 
        } ,
        assessmentInfoId: 0,
        divisorDwelling: {
          bool: [],
          content1: "",
          content2: ""
        },
        divisorDwellingAdjust: "",
        divisorEquipment: [],
        divisorEquipmentAdjust: "",
        divisorFamily: {
          bool: "",
          content: ""
        },
        divisorNurse: "",
        divisorNurseAdjust: "",
        divisorNurseAssist: "",
        divisorRoomLayoutA: "",
        divisorRoomLayoutB: "",
        divisorSocial: "",
        divisorTraffic: "",
        id: "",
        oldManId: 1,
        summaryPriorityA: "",
        summaryPriorityB: "",
        summaryPriorityC: "",
        summaryProblemsA: "",
        summaryProblemsB: "",
        summaryProblemsC: "",
        summaryProblemsD: "",
        summaryRisk: [],
        summarySense: ""

      },

   
      // 拖拽
      drag_flag: [null, null, null, null, null, null],
      drag_list: [{
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        ""

      ],
      // 初始化数据
      copy_drag_list: [{
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        {
          bool: true,
          x: 0,
          y: 0,
        },
        ""

      ],
      drag_cur: [{
          x: "",
          y: ""
        },
        {
          x: "",
          y: ""
        },
        {
          x: "",
          y: ""
        },
        {
          x: "",
          y: ""
        },
        {
          x: "",
          y: ""
        },
        {
          x: "",
          y: ""
        }
      ],
      drag_dx: [null, null, null, null, null, null],
      drag_dy: [null, null, null, null, null, null],
      drag_nx: [null, null, null, null, null, null],
      drag_ny: [null, null, null, null, null, null],
      rem_bool: true,
    };
  },
  methods: {
 
 
  
   
 
   
    // 环境因子+汇总
    async onGetSelectDivisorListAll() {

      try{
      let res = await selectDivisorList({
          oldManId: this.oldId,
          assessmentInfoId: this.assessmentInfoId
        });

        if(res.code == 0 || res.code == 416){
        if (res.data.length > 0) {
                this.old_divisor = res.data[0];
                this.old_divisor.divisorEquipment = res.data[0].divisorEquipment.split(
                  ","
                );
                this.old_divisor.divisorFamily = JSON.parse(res.data[0].divisorFamily);
                this.old_divisor.summaryRisk = res.data[0].summaryRisk.split(",");
                this.old_divisor.divisorDwelling = JSON.parse(
                  res.data[0].divisorDwelling
                );
                this.old_divisor.divisorTopic = JSON.parse(
                  res.data[0].divisorTopic
                );
                this.old_divisor.divisorRoomLayoutA = JSON.parse(res.data[0].divisorRoomLayoutA);
                this.drag_list = this.old_divisor.divisorRoomLayoutA;
              }else{
              // let copy = {};
              //   for(let i in this.copy_old_divisor){
              //     Vue.set(copy , i , this.copy_old_divisor[i])
              //   }
              //  this.old_divisor = copy;

              //  let copy2 = [];
              //   for(let i = 0; i < this.copy_drag_list.length; i++){
              //      Vue.set(copy2 , i ,  this.copy_drag_list[i])
              //   }
              //   this.drag_list = copy2;
              this.old_divisor_id = "";
              }
        }else{
          this.$Notice.error({
                    title: this.$t("global.reminder"),
                    desc: this.$t('evaluate.tabList.ambientTab') + this.$t("global.loadFail"),
                  });
        }
      }catch(err){
        console.log("環境因子 • 課題整理総括" + err);
          this.$Notice.error({
                    title: this.$t("global.reminder"),
                    desc: this.$t('evaluate.tabList.ambientTab') + this.$t("global.loadFail"),
                  });
      }

    
     

      let dom = document.querySelector(".drag-content");

      let html = document.querySelector("html");
      let font = window.getComputedStyle(html).fontSize;
      let size = font.slice(0, -2);

      this.$refs.div1.style.left = this.drag_list[0].x;
      this.$refs.div1.style.top = this.drag_list[0].y;
      this.$refs.div2.style.left = this.drag_list[1].x;
      this.$refs.div2.style.top = this.drag_list[1].y;
      this.$refs.div3.style.left = this.drag_list[2].x;
      this.$refs.div3.style.top = this.drag_list[2].y;
      this.$refs.div4.style.left = this.drag_list[3].x;
      this.$refs.div4.style.top = this.drag_list[3].y;
      this.$refs.div5.style.left = this.drag_list[4].x;
      this.$refs.div5.style.top = this.drag_list[4].y;
      this.$refs.div6.style.left = this.drag_list[5].x;
      this.$refs.div6.style.top = this.drag_list[5].y;



      this.$refs.div1.style.background = `url(${this.imgSrc1})`;
      this.$refs.div1.style.backgroundSize = `100% 100%`;
      this.$refs.div1.style.backgroundRepeat = `no-repeat`;
      this.$refs.div1.style.backgroundPosition = `center`;

      this.$refs.div2.style.background = `url(${this.imgSrc2})`;
      this.$refs.div2.style.backgroundSize = `100% 100%`;
      this.$refs.div2.style.backgroundRepeat = `no-repeat`;
      this.$refs.div2.style.backgroundPosition = `center`;

      this.$refs.div3.style.background = `url(${this.imgSrc3})`;
      this.$refs.div3.style.backgroundSize = `100% 100%`;
      this.$refs.div3.style.backgroundRepeat = `no-repeat`;
      this.$refs.div3.style.backgroundPosition = `center`;

      this.$refs.div4.style.background = `url(${this.imgSrc4})`;
      this.$refs.div4.style.backgroundSize = `100% 100%`;
      this.$refs.div4.style.backgroundRepeat = `no-repeat`;
      this.$refs.div4.style.backgroundPosition = `center`;

      this.$refs.div5.style.background = `url(${this.self_woman})`;
      this.$refs.div5.style.backgroundSize = `100% 100%`;
      this.$refs.div5.style.backgroundRepeat = `no-repeat`;
      this.$refs.div5.style.backgroundPosition = `center`;

      this.$refs.div6.style.background = `url(${this.imgSrc3})`;
      this.$refs.div6.style.backgroundSize = `100% 100%`;
      this.$refs.div6.style.backgroundRepeat = `no-repeat`;
      this.$refs.div6.style.backgroundPosition = `center`;

      this.$refs.div1.addEventListener('mousedown', (e) => {
        this.down(e, 0);
      }, false);
      this.$refs.div1.addEventListener('mousemove', (e) => {
        this.move(e, 0, 1.5, 1.3);
      }, false);
      this.$refs.div1.addEventListener('mouseup', (e) => {
        this.end(e, 0);
      }, false);
      this.$refs.div2.addEventListener('mousedown', (e) => {
        this.down(e, 1);
      }, false);
      this.$refs.div2.addEventListener('mousemove', (e) => {
        this.move(e, 1, 1.7, 1.5);
      }, false);
      this.$refs.div2.addEventListener('mouseup', (e) => {
        this.end(e, 1);
      }, false);
      this.$refs.div3.addEventListener('mousedown', (e) => {
        this.down(e, 2);
      }, false);
      this.$refs.div3.addEventListener('mousemove', (e) => {
        this.move(e, 2, 1.6, 1.7);
      }, false);
      this.$refs.div3.addEventListener('mouseup', (e) => {
        this.end(e, 2);
      }, false);
      this.$refs.div4.addEventListener('mousedown', (e) => {
        this.down(e, 3);
      }, false);
      this.$refs.div4.addEventListener('mousemove', (e) => {
        this.move(e, 3, 1.97, 1.6);
      }, false);
      this.$refs.div4.addEventListener('mouseup', (e) => {
        this.end(e, 3);
      }, false);
      this.$refs.div5.addEventListener('mousedown', (e) => {
        this.down(e, 4);
      }, false);
      this.$refs.div5.addEventListener('mousemove', (e) => {
        this.move(e, 4, 1.49, 1.84);
      }, false);
      this.$refs.div5.addEventListener('mouseup', (e) => {
        this.end(e, 4);
      }, false);
      this.$refs.div6.addEventListener('mousedown', (e) => {
        this.down(e, 5);
      }, false);
      this.$refs.div6.addEventListener('mousemove', (e) => {
        this.move(e, 5, 1.84, 1.49);
      }, false);
      this.$refs.div6.addEventListener('mouseup', (e) => {
        this.end(e, 5);
      }, false);

      this.$refs.div1.addEventListener('touchstart', (e) => {
        this.down(e, 0);
      }, false);
      this.$refs.div1.addEventListener('touchmove', (e) => {
        this.move(e, 0, 1.5, 1.3);
      }, {
        passive: false
      });
      this.$refs.div1.addEventListener('touchend', (e) => {
        this.end(e, 0);
      }, false);

      this.$refs.div2.addEventListener('touchstart', (e) => {
        this.down(e, 1);
      }, false);
      this.$refs.div2.addEventListener('touchmove', (e) => {
        this.move(e, 1, 1.7, 1.5);
      }, {
        passive: false
      });
      this.$refs.div2.addEventListener('touchend', (e) => {
        this.end(e, 1);
      }, false);

      this.$refs.div3.addEventListener('touchstart', (e) => {
        this.down(e, 2);
      }, false);
      this.$refs.div3.addEventListener('touchmove', (e) => {
        this.move(e, 2, 1.6, 1.7);
      }, {
        passive: false
      });
      this.$refs.div3.addEventListener('touchend', (e) => {
        this.end(e, 2);
      }, false);

      this.$refs.div4.addEventListener('touchstart', (e) => {
        this.down(e, 3);
      }, false);
      this.$refs.div4.addEventListener('touchmove', (e) => {
        this.move(e, 3, 1.97, 1.6);
      }, {
        passive: false
      });
      this.$refs.div4.addEventListener('touchend', (e) => {
        this.end(e, 3);
      }, false);

      this.$refs.div5.addEventListener('touchstart', (e) => {
        this.down(e, 4);
      }, false);
      this.$refs.div5.addEventListener('touchmove', (e) => {
        this.move(e, 4, 1.49, 1.84);
      }, {
        passive: false
      });
      this.$refs.div5.addEventListener('touchend', (e) => {
        this.end(e, 4);
      }, false);

      this.$refs.div6.addEventListener('touchstart', (e) => {
        this.down(e, 5);
      }, false);
      this.$refs.div6.addEventListener('touchmove', (e) => {
        this.move(e, 5, 1.84, 1.49);
      }, {
        passive: false
      });
      this.$refs.div6.addEventListener('touchend', (e) => {
        this.end(e, 5);
      }, false);
    

    },
    async onSelectDivisorListAll() {
      let div = document.querySelector("#capture");
      let h = div.offsetHeight;
      let w = div.offsetWidth;
      new html2canvas(document.querySelector("#capture"), {
        useCORS: true,
        allowTaint: true,
        scale: window.devicePixelRatio, //提高清晰度
        width: w,
        height: h
      }).then(async canvas => {
        const data = {
          base64: canvas.toDataURL()
        };
        const config = {
          headers: {
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          }
        };
        try {
          const res = await sendUploadBase(qs.stringify(data), config);
          if (res.code === 0) {
            this.drag_list[6] = res.data.httpUrl
          }
        } catch (err) {
          console.log(err);
        }
      });

      this.$Modal.confirm({
        title: this.$t("global.reminder"),
        content: this.$t("ServePlan.uploads"),
        okText: this.$t('global.sure'),
        cancelText: this.$t('global.cancel'),
        onOk: async () => {

          let html = document.querySelector("html");
          let font = window.getComputedStyle(html).fontSize;
          let size = font.slice(0, -2);

          this.old_divisor.oldManId = this.oldId;


          let rem0x = this.drag_list[0].x + '';
          let rem0y = this.drag_list[0].y + '';
          let rem1x = this.drag_list[1].x + '';
          let rem1y = this.drag_list[1].y + '';
          let rem2x = this.drag_list[2].x + '';
          let rem2y = this.drag_list[2].y + '';
          let rem3x = this.drag_list[3].x + '';
          let rem3y = this.drag_list[3].y + '';
          let rem4x = this.drag_list[4].x + '';
          let rem4y = this.drag_list[4].y + '';
          let rem5x = this.drag_list[5].x + '';
          let rem5y = this.drag_list[5].y + '';
          let bool_rem0x = rem0x.slice(-3);
          let bool_rem0y = rem0y.slice(-3);
          let bool_rem1x = rem1x.slice(-3);
          let bool_rem1y = rem1y.slice(-3);
          let bool_rem2x = rem2x.slice(-3);
          let bool_rem2y = rem2y.slice(-3);
          let bool_rem3x = rem3x.slice(-3);
          let bool_rem3y = rem3y.slice(-3);
          let bool_rem4x = rem4x.slice(-3);
          let bool_rem4y = rem4y.slice(-3);
          let bool_rem5x = rem5x.slice(-3);
          let bool_rem5y = rem5y.slice(-3);

          if (bool_rem0x == 'rem' || bool_rem0x == 'rem') {
            this.drag_list[0].x = this.drag_list[0].x;
            this.drag_list[0].y = this.drag_list[0].y;
          } else {
            this.drag_list[0].x = (this.drag_list[0].x / size).toFixed(5) + "rem";
            this.drag_list[0].y = (this.drag_list[0].y / size).toFixed(5) + "rem";
          }

          if (bool_rem1x == 'rem' || bool_rem1x == 'rem') {
            this.drag_list[1].x = this.drag_list[1].x;
            this.drag_list[1].y = this.drag_list[1].y;
          } else {
            this.drag_list[1].x = (this.drag_list[1].x / size).toFixed(5) + "rem";
            this.drag_list[1].y = (this.drag_list[1].y / size).toFixed(5) + "rem";
          }

          if (bool_rem2x == 'rem' || bool_rem2x == 'rem') {
            this.drag_list[2].x = this.drag_list[2].x;
            this.drag_list[2].y = this.drag_list[2].y;
          } else {
            this.drag_list[2].x = (this.drag_list[2].x / size).toFixed(5) + "rem";
            this.drag_list[2].y = (this.drag_list[2].y / size).toFixed(5) + "rem";
          }

          if (bool_rem3x == 'rem' || bool_rem3x == 'rem') {
            this.drag_list[3].x = this.drag_list[3].x;
            this.drag_list[3].y = this.drag_list[3].y;
          } else {
            this.drag_list[3].x = (this.drag_list[3].x / size).toFixed(5) + "rem";
            this.drag_list[3].y = (this.drag_list[3].y / size).toFixed(5) + "rem";
          }

          if (bool_rem5x == 'rem' || bool_rem5x == 'rem') {
            this.drag_list[5].x = this.drag_list[5].x;
            this.drag_list[5].y = this.drag_list[5].y;
          } else {
            this.drag_list[5].x = (this.drag_list[5].x / size).toFixed(5) + "rem";
            this.drag_list[5].y = (this.drag_list[5].y / size).toFixed(5) + "rem";
          }

          this.old_divisor.divisorRoomLayoutA = JSON.stringify(this.drag_list);


          let objDivisor = {};
          for (let i in this.old_divisor) {
            Vue.set(objDivisor, i, this.old_divisor[i]);
          }

          this.old_divisor.divisorEquipment = this.old_divisor.divisorEquipment.sort((a , b)=>{
              return a - b; 
          });
          this.old_divisor.divisorDwelling.bool = this.old_divisor.divisorDwelling.bool.sort((a , b)=>{
              return a - b;
          })
          this.old_divisor.summaryRisk = this.old_divisor.summaryRisk.sort((a , b)=>{
              return a - b;
          })

          

          objDivisor.divisorDwelling = JSON.stringify(
            this.old_divisor.divisorDwelling
          );
          objDivisor.divisorEquipment = this.old_divisor.divisorEquipment.join();
          objDivisor.divisorFamily = JSON.stringify(this.old_divisor.divisorFamily);
          objDivisor.summaryRisk = this.old_divisor.summaryRisk.join();
          objDivisor.assessmentInfoId = this.assessmentInfoId;
          objDivisor.divisorTopic = JSON.stringify(
            this.old_divisor.divisorTopic
          );
          // objDivisor.divisorRoomLayoutA = JSON.stringify(this.drag_list);

          if (this.old_divisor_id == "") {
            this.old_divisor_id = "环境id";
            objDivisor.id = "";

            try{
                let res = await innsetDivisorSave(objDivisor);
                if (res.code == 0) {
                  this.$Notice.success({
                    title: this.$t("global.reminder"),
                    desc: this.$t("global.operationSuccess"),
                  });
                }else if (res.code == 415) {
                  this.$Notice.error({
                    title: this.$t("global.operationFail"),
                    desc: this.$t("global.claim")
                  });
                    return
                }  else {
                  this.$Notice.error({
                    title: this.$t("global.reminder"),
                    desc: this.$t("global.failed"),
                  });
                }
                this.onGetSelectDivisorListAll();
            }catch(err){
             console.log(err);
             this.$Notice.error({
                    title: this.$t("global.reminder"),
                    desc: this.$t("global.failed"),
                  });
            }
         

          } else {
 
            try{
              let result = await updateDivisor(objDivisor);
              if (result.code == 0) {
                this.$Notice.success({
                  title: this.$t("global.reminder"),
                  desc: this.$t("global.operationSuccess"),
                });
              } else if (result.code === 415) {
                this.$Notice.error({
                  title: this.$t("global.operationFail"),
                  desc: this.$t("global.claim")
                });
              } else {
                this.$Notice.error({
                  title: this.$t("global.reminder"),
                  desc: this.$t("global.failed"),
                });
              }
              this.onGetSelectDivisorListAll();
            }catch(err){
              console.log(err);
              this.$Notice.error({
                  title: this.$t("global.reminder"),
                  desc: this.$t("global.failed"),
                });
            }
           

          }
        }
      });
    },
 
    // 拖拽funS
    down(evt, index) {
      let dom = document.querySelectorAll(".drag-content>div");
      var event = evt || window.event;
      event.preventDefault();
      this.drag_flag[index] = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.drag_cur[index].x = touch.clientX;
      this.drag_cur[index].y = touch.clientY;
      this.drag_dx[index] = dom[index].offsetLeft;
      this.drag_dy[index] = dom[index].offsetTop;

    },
    move(evt, index, timesX, timesY) {
      var event = evt || window.event;
      event.preventDefault();
      let html = document.querySelector("html");
      let font = window.getComputedStyle(html).fontSize;
      let size = font.slice(0, -2);
      let dom = document.querySelectorAll(".drag-content>div");

      if (this.drag_flag[index]) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.drag_nx[index] = touch.clientX - this.drag_cur[index].x;
        this.drag_ny[index] = touch.clientY - this.drag_cur[index].y;

        this.drag_list[index].x = this.drag_dx[index] + this.drag_nx[index];
        this.drag_list[index].y = this.drag_dy[index] + this.drag_ny[index];
        if (this.drag_list[index].x <= 0) this.drag_list[index].x = 0;
        if (this.drag_list[index].x >= size * timesX) this.drag_list[index].x = parseFloat(size) * timesX;
        if (this.drag_list[index].y <= 0) this.drag_list[index].y = 0
        if (this.drag_list[index].y >= size * timesY) this.drag_list[index].y = parseFloat(size) * timesY;
        dom[index].style.left = this.drag_list[index].x + "px";
        dom[index].style.top = this.drag_list[index].y + "px";

      }

    },
    end(evt, index) {
      var event = evt || window.event;
      event.preventDefault();
      this.drag_flag[index] = false;

    },
    // 拖拽funE
   
 

  

    async selectGetDateById(){

    try{
      let res = await getDateById({
        oldManId:this.oldId , 
        type:3 ,
        year:this.occurrenceYear
      });
        if(res.code == 0){
          this.occurrenceDayList =  res.data.map((item , index)=>{
              return {value:item.date}   
          });
          if(this.occurrenceDayList.length > 0){
            this.occurrenceDay =  this.occurrenceDayList[0].value;  
            this.old_info.infoDate = this.occurrenceDayList[0].value; 
            if(this.tabIndex == 0){
              this.onGetSelectInofList();
            }
          }else{
            setTimeout(()=>{
            this.old_info.infoDate = format(new Date(), "YYYY-MM-DD");
            } , 10)
            this.occurrenceDay = "";
            this.assessmentInfoId = "";
          }
        } else {
            this.$Notice.error({
              title: this.$t("global.loadFail"),
              desc: res.data
            });
          }
    }catch(err){
        console.log(err);
        this.$Notice.error({
                    title: this.$t("global.reminder"),
                    desc:  this.$t("global.loadFail"),
                });
    }
    


    } ,

   

  },


  async mounted() {



    let that = this;
    this.$nextTick(function () {

    imgTo(BASE_URL + "pic/20200901/1598930114224.png").then(res => {
      this.imgSrc1 = res;
    });
    imgTo(BASE_URL + "pic/20200901/1598930139650.png").then(res => {
      this.imgSrc2 = res;
    });

    imgTo(BASE_URL + "pic/20200901/1598930155994.png").then(res => {
      this.imgSrc3 = res;
    });

    imgTo(BASE_URL + "pic/20200901/1598930172592.png").then(res => {
      this.imgSrc4 = res;
    });
    imgTo(BASE_URL + "pic/20200811/1597125495137.png").then(res => {
      this.self_man = res;
    });

    imgTo(BASE_URL + "pic/20200815/1597471892528.png").then(res => {
      this.self_woman = res;
    });
   
      

    })
    
  }
};
</script>

<style lang="less" scoped>
// 拖拽样式
.drag-header {
  width: 2rem;
  height: auto;
  border-bottom: 1px solid #cccccc;
  margin: 0 auto;
  display: flex;
  padding: 0.1rem 0 0.05rem 0;
  justify-content: space-around;
  align-items: center;
}

.drag-header>div>img {
  width: 80%;
  height: 80%;
}

.drag-div1,
.drag-div2,
.drag-div3,
.drag-div4 {
  width: 0.4rem;
  // height: 0.29rem;
  opacity: 0.3;
  text-align: center;
}

.drag-div4 {
  // width: 0.02rem;
  // height: 0.29rem;
  // opacity: 0.3;
  // background: #666666;
}

.drag-div5 {
  width: 0.35rem;
  height: 0.02rem;
  opacity: 0.3;
  background: #666666;
}

.drag-div6 {
  width: 0.02rem;
  height: 0.35rem;
  opacity: 0.3;
  background: #666666;
}

#drag-div1 {
  position: absolute;
  width: 0.5rem;
  height: 0.7rem;
}

#drag-div2 {
  position: absolute;
  width: 0.3rem;
  height: 0.5rem;
}

#drag-div3 {
  position: absolute;
  width: 0.4rem;
  height: 0.3rem;
}

#drag-div4 {
  position: absolute;
  width: 0.03rem;
  height: 0.4rem;
}

#drag-div5 {
  position: absolute;
  width: 0.5rem;
  height: 0.15rem;
  // border: 1px solid red;
  z-index: 9999;

}

#drag-div5>div {
  width: 0.5rem;
  height: 0.02rem;
  background: #666666;
  margin-top: 0.065rem;
}

#drag-div6 {
  position: absolute;
  width: 0.15rem;
  height: 0.5rem;
  // border: 1px solid red;

}

#drag-div6>div {
  width: 0.02rem;
  height: 0.5rem;
  background: #666666;
  margin-left: 0.065rem;
}

.drag-content {
  position: relative;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  touch-action: none;
  border: 1px solid #cccccc;
}

.move-none {
  display: none !important;
}

.move-opacity {
  opacity: 1 !important;
}

.textCenter {
  text-align: center;
}

.new {
  text-align: left;

  .head-bg {
    font-size: 0.14rem;
  }

  .table {
    label {
      margin-right: 0.1rem
        /* 10/102 */
      ;

      input {
        margin-right: 0.03rem
          /* 3/102 */
        ;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-color: var(--border-color);
    margin-bottom: 0.29rem
      /* 30/102 */
    ;
    font-size: 0.14rem
      /* 14/102 */
    ;
    line-height: 0.29rem
      /* 30/102 */
    ;
    background: #fff;

    td {
      position: relative;
    }

    .stroke {
      width: 0.6rem;
      line-height: 0.2rem;
      padding: 0.05rem;
    }

    .textCenter {
      text-align: center;
    }
  }

  // table end
}

//  #drain-trip end
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.new-td-center {
  width: 100%;
  text-align: center;
}

.radio-middle {
  vertical-align: middle;
}

.label-margin-left {
  margin-left: 0.1rem;
}

.space {
  margin-right: 0.2rem;
}

.header-row-two {
  /* width: 2rem;
  height: 0.38rem; */
  line-height: 0.38rem;
  text-align: center;
  font-size: 0.15rem;
  font-weight: bold;
  color: #333333;
  border-radius: 0.04rem;
  // background: #d9f7be;
  background: #ececec;
  margin-right: 0.3rem;
  margin-bottom: 0.15rem;
  float: left;
  padding: 0 0.2rem;
}

.clear::after {
  content: "";
  display: block;
  clear: left;
}

.active {
  background: #028174;
  color: #ffffff;
}

.new-table-padding td {
  padding: 0.1rem 0.1rem !important;
}
</style><style>
.new-width-input>input {
  max-width: 10rem !important;
  font-size: 0.14rem !important;
}

.new-min-width-input>input {
  min-width: 0.4rem;
}

.new-width-input-date>.ivu-date-picker-rel>.ivu-input-wrapper>input {
  text-align: center;
  font-size: 0.14rem;
}
</style><style lang="less">
.sheet {
  touch-action: none;

  .special .ivu-input {
    text-align: center;

  }

  .text_align .ivu-input {
    text-align: center;
  }

  .dateY_width {
    width: 0.6rem;
  }

  .dateM_width {
    width: 0.4rem;
  }

  .table-padding td {
    padding: 0.05rem;
  }

  .fontS .ivu-checkbox-wrapper {
    font-size: 0.11rem;
  }

  .dateD_width .ivu-input {}
}

.sheet {
  padding: 0 25px 0 15px;
}

.table {
  font-size: 0.14rem
    /* 14/102 */
  ;
  text-align: left;

  .cell {
    text-align: left;

    .flex {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  input {
    border: 0;
    outline: none;
    // max-width: 0.59rem /* 60/102 */;
  }

  label {
    // margin: 0 0.1rem;

    input {
      margin: 0 0.05rem;
    }
  }

  textarea {
    border: 0;
    resize: none;
    width: 100%;
    font-size: 0.14rem;
  }

  article {
    display: inline-block;
    width: 49%;
  }

  .block label {
    display: block;
  }
}

.tip_text span {
  margin: 0 0.2rem
    /* 20/102 */
  ;
}

.date {
  padding: 0.1rem 0 !important;

  input {
    width: 0.31rem
      /* 32/102 */
    ;
    text-align: right;
  }
}

.sheetTable {
  font-size: 14px;
  width: 100%;
  margin-bottom: 0.26rem;
}

.sheetTable td {
  padding: 0.13rem 0;
}

.sheetTitle {
  text-align: left;
  font-size: 0.18rem
    /* 18/102 */
  ;
  line-height: 0.55rem
    /* 56/102 */
  ;
  padding: 0 0.26rem
    /* 27/102 */
  ;
  background: linear-gradient(90deg, #63af1e, #63af1e, #fff);
  color: #fff;
  margin: 0.25rem
    /* 25/102 */
    0;
}

.bd {
  border: 0;
  outline: none;
  max-width: 0.29rem !important
    /* 60/102 */
  ;
}

.wd {
  width: 0.3rem;
}

.autograph {
  width: 100%;
  margin-bottom: 0.26rem;
}

.autograph td {
  height: 0.5rem;
  line-height: 0.5rem;
}

.agree {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #000;
  text-align: left;
}

.food {
  font-size: 14px;
  width: 100%;
  margin-bottom: 0.26rem;
}

.food>tr>td {
  height: 0.37rem;
}

.food>tr>th {
  height: 0.37rem;
}

.demend {
  width: 0.9rem;
  height: 0.7rem;
}

.food-input {
  width: auto;
}

.move {
  width: 100%;
  /* overflow-y:scroll; */
}
.evaluate-text-left{
   text-align: left;
}

</style>
