import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import initials from 'initials';
import {connect} from 'react-redux';

import {CustomView, Text, Button} from '../../components/';
import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../theme';
import {ScrollView} from 'react-native-gesture-handler';

function Home({navigation, auth}: any) {
  const [action] = React.useState([
      {
        title: 'Poin',
        navigate: 'Point',
        icon: 'star',
      },
      {
        title: 'My Team',
        navigate: 'MyTeam',
        icon: 'users',
      },
      {
        title: 'Ambil Hadiah',
        navigate: 'Awards',
        icon: 'gift',
      },
      {
        title: 'Ranking Global',
        navigate: 'Rank',
        icon: 'award',
      },
    ]),
    [say, setSay] = React.useState('Wellcome home'),
    [news] = React.useState([
      {
        title: 'Gerakan Perumahan Bebas Sampah Plastik 100.000 point',
        subtitle: 'Perumahan akan di bersihkan dalam rangka 17 agustusan',
        image: 'https://griajkt08.files.wordpress.com/2013/11/dsc_0118.jpg',
      },
      {
        title: 'Bank sampah kita semua',
        subtitle: 'Bantu Mendirikan bank sampah RT 300.000 poin',
        image:
          'https://lh3.googleusercontent.com/proxy/AyaO-3S7npcdPHByO0-vEwQtiB-4QBv7Q5KftrjCxlr9GPcHYA7_JQn59yZjbS-FtnrxXH-BdsMmo-cFN9EHdNxN9ipLYjUfAA6TidPFVlhcnxBJogc',
      },
      {
        title: 'Gerakan swalayan bersih',
        subtitle:
          'Ayo Jadi Pahlawan Lingkungan, Tempatkan Tong iOT Mountrash di Lokasi Swalayan Mitramu Dapatkan 500.000 point',
        image:
          'https://obs.line-scdn.net/0h3uvmNspnbFpLFEV08W4TDXFCbzV4eH9ZLyI9RBt6Mm4xISNfcXF2NGhAYDhmdisEJSYjP2kdd2s0LS9ZI3J2/w644',
      },
    ]),
    name = auth.auth_data.name;

  const sayHello = () => {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      setSay('Selamat pagi');
    } else if (curHr < 18) {
      setSay('Selamat siang');
    } else {
      setSay('Selamat malam');
    }
  };

  React.useEffect(() => {
    sayHello();
  }, []);

  const navigateProfile = () => {
    navigation.navigate('Profile');
  };

  useFocusEffect(
    React.useCallback(() => {
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />;
    }, []),
  );

  const renderItem = ({item}: any) => {
    return (
      <Button
        style={styles.box}
        onPress={() => navigation.navigate(item.navigate)}>
        <View style={styles.boxIcon}>
          <Icon name={`${item.icon}`} size={20} />
        </View>
        <View style={styles.boxText}>
          <Text
            style={styles.textBox}
            size={7.5}
            type="regular">{`${item.title}`}</Text>
        </View>
      </Button>
    );
  };

  const renderNews = ({item}: any) => {
    return (
      <View style={styles.boxNews}>
        <Image source={{uri: item.image}} style={styles.imageNews} />
        <View style={styles.boxTextNews}>
          <Text
            size={7.5}
            type="bold"
            style={styles.textHeaderNews}>{`${item.title}`}</Text>
          <Text
            size={7.5}
            type="regular"
            color="grey">{`${item.subtitle}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <CustomView>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.headerApp}>
        <Text type="bold" style={styles.textHeader} size={15} color="white">
          Mountrash
        </Text>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Button onPress={navigateProfile} style={styles.avatar}>
            <Text type="bold" size={15} color={colors.primary}>
              {initials(name)}
            </Text>
          </Button>
          <View>
            <Text type="regular" size={10} color="lightgrey">
              {`${say}`}
            </Text>
            <Text type="bold" size={12} color="white">
              {`${name}`}
            </Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <FlatList
            data={action}
            style={{alignSelf: 'center'}}
            keyExtractor={(item: any) => item.title}
            horizontal
            renderItem={renderItem}
          />
        </View>

        {/* S&K */}
        <View style={styles.footer}>
          <Button style={styles.buttonSk}>
            <Icon name="alert-circle" size={20} color={colors.success} />
            <View style={styles.containerSk}>
              <Text type="regular" color={colors.success}>
                Belum tau caranya ?
              </Text>
              <Text type="bold" color={colors.success}>
                Baca syarat dan ketentuan
              </Text>
            </View>
          </Button>

          <View style={styles.containerFooter}>
            <Text type="semibold" color="grey" size={10}>
              Event yang akan datang
            </Text>

            <View style={styles.newsFeed}>
              <Image
                source={{
                  uri:
                    'https://assets-a1.kompasiana.com/statics/crawl/5529d7076ea83499488b4567.jpeg',
                }}
                style={styles.image}
              />
              <View style={styles.textNews}>
                <Text type="bold" color="white" size={10}>
                  Gerakan 1000 kantong sampah
                </Text>
                <Text type="regular" color="white">
                  Akan dihadiri oleh seluruh warga Tangerang Selatan
                </Text>
              </View>
            </View>
            <FlatList
              data={news}
              keyExtractor={(item: any) => item.title}
              renderItem={renderNews}
            />
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: Dimensions.get('window').height * 0.2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    paddingBottom: 50,
  },
  avatar: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').height * 0.1,
    backgroundColor: 'white',
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: colors.gray2,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
    marginTop: -30,
    padding: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  box: {
    width: 65,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  boxIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.like + 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    textAlign: 'center',
  },
  boxText: {
    justifyContent: 'center',
    marginTop: 5,
    height: 30,
  },
  footer: {
    padding: 20,
  },
  buttonSk: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: colors.success + 45,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerSk: {
    marginLeft: 20,
  },
  containerFooter: {
    marginVertical: 20,
  },
  newsFeed: {
    marginVertical: 20,
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
  },
  textNews: {
    width: Dimensions.get('window').width - 40,
    padding: 10,
    backgroundColor: colors.gray4 + 90,
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boxNews: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: colors.white,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  imageNews: {
    height: 70,
    width: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  boxTextNews: {
    width: 200,
  },
  textHeaderNews: {
    marginBottom: 5,
  },
  headerApp: {
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    marginTop: 20,
  },
  icon: {
    paddingTop: 20,
  },
});
