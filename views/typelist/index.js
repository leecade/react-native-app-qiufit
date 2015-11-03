/**
 * Created by guguyanhua on 10/30/15.
 */
var React = require('react-native');
var StepList = require('../steplist');
//var Reflux = require('reflux');
//var _ = require('lodash');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
    TouchableOpacity,
    ScrollView,
    Image,
    NavigatorIOS
    } = React;
var Router = require('../router');

var typeList = [
  {
    type: "俯卧撑",
    icon: '',
    process: '2/10'
  },
  {
    type: "深蹲",
    icon: '',
    process: '2/10'
  },
  {
    type: "引体向上",
    icon: '',
    process: '0/10'
  },
  {
    type: "举腿",
    icon: '',
    process: '0/10'
  },
  {
    type: "桥",
    icon: '',
    process: '0/10'
  },
  {
    type: "到里程",
    icon: '',
    process: '0/10'
  },
];


var TypeItem = React.createClass({
  pushPaperById(){
    this.props.navigator.push(Router.getStepList());
  },
  render: function () {
    return (
        <TouchableOpacity onPress={this.pushPaperById}>
          <View style={styles.container}>
            <Image />
            <Text>{this.props.type}</Text>
            <Text>{this.props.process}</Text>
          </View>
          <View style={styles.separator}/>
        </TouchableOpacity>
    );
  }
});

var TypesView = React.createClass({
  getInitialState: function () {
    //ResumesActionCreators.fetchResumes();
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      typeList: typeList
    };
  },
  render: function () {
    return (
        <View>
          <View style={styles.nav}><Text style={{color:'white', padding:20}}>囚徒健身</Text></View>
          <ListView
              dataSource={this.state.dataSource.cloneWithRows(this.state.typeList)}
              renderRow={this.renderType}
              style={styles.listView}
              />
        </View>
    );

  },
  renderType: function (q) {
    return ( <TypeItem
            type={q.type}
            key={q.type}
            icon={q.icon}
            process={q.process}
            {...this.props}
            />
    );
  }
});


var styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  nav: {
    flex: 1,
    height: 64,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  }
});

module.exports = TypesView;
