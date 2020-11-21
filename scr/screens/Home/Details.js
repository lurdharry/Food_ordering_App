import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  hp,
  wp,
  FavHeader,
  RegularText,
  SemiBoldText,
  BoldText,
  TypesCard,
  navigate,
} from '../../common';
import * as Colors from '../../common/colors';
import {RestImage} from '../../../assets/images';
import {Star} from '../../../assets/icons.svg/icon_svg';
import {PopularRow, Types} from './utils';
import {addItemToCart, removeFromCart} from '../../store/actions';
import {MenuFoodCard, Foods} from '../Menu/utils';

class Details extends Component {
  state = {
    isFav: false,
    title: 'Best Seller',
  };
  addAsFav = () => {
    this.setState({isFav: !this.state.isFav});
  };
  onSelect = title => {
    this.setState({title});
  };

  addTocart = item => {
    this.props.addItemToCart(item);
  };

  showSelected = item => {
    const {cart} = this.props;
    try {
      if (cart.some(food => food.id === item.id)) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  removeFromCart = item => {
    this.props.removeFromCart(item);
  };

  _renderItem = ({item}) => {
    const selected = this.showSelected(item);
    return (
      <MenuFoodCard
        source={item}
        added={selected}
        onpress={() => {
          selected ? this.removeFromCart(item) : this.addTocart(item);
        }}
      />
    );
  };

  render() {
    const {isFav, title} = this.state;
    const {details} = this.props.route.params;

    return (
      <>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <FavHeader
          navigation={this.props.navigation}
          onFavPress={this.addAsFav}
          isFav={isFav}
        />
        <View style={styles.container}>
          <Image source={RestImage} style={styles.pic} resizeMode="stretch" />
          <DetailsCard
            details={details}
            onPress={() => navigate(this, 'menu')}
          />
          <PopularRow title="Menu" />
          <View style={{height: hp(60)}}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Types.map((item, index) => (
                <TypesCard
                  key={index}
                  title={item.title}
                  onPress={() => this.onSelect(item.title)}
                  selected={title === item.title}
                />
              ))}
            </ScrollView>
          </View>
          <FlatList
            data={Foods}
            renderItem={this._renderItem}
            extraData={this.props}
            style={{flex: 1, paddingTop: hp(10)}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {cart, cartTotal, finishedOnboarding} = state.appReducer;
  return {
    cart,
    finishedOnboarding,
    cartTotal,
  };
};
const mapDispatchToProps = {
  addItemToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const DetailsCard = ({details, onPress}) => {
  const {name, rating, category, count} = details;

  return (
    <View style={styles.detailsView}>
      <View>
        <BoldText title={name} style={styles.name} onPress={onPress} />
        <View style={styles.star_cat}>
          <Star height={14} width={14} style={styles.star} />
          <SemiBoldText title={`${rating.toString()} `} style={styles.rating} />
          <RegularText title={`(${count.toString()}) `} style={styles.count} />
          <RegularText title={`• ${category}`} style={styles.cat} />
        </View>
      </View>
      <SemiBoldText title="More info" style={styles.more} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    // marginVertical: hp(24),
    paddingHorizontal: wp(24),
    flexDirection: 'row',
  },
  count: {
    fontSize: hp(14),
  },
  cat: {
    fontSize: hp(14),
    color: Colors.LightPurple,
  },
  star: {
    marginBottom: hp(3),
  },
  rating: {
    marginLeft: wp(8),
    fontSize: hp(14),
  },
  star_cat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: hp(24),
  },
  more: {
    fontSize: hp(12),
    color: Colors.Purple,
    // zIndex: 100,
    lineHeight: hp(50),
  },
  detailsView: {
    flexDirection: 'row',
    paddingHorizontal: wp(24),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp(40),
  },
  pic: {
    width: wp(343),
    height: hp(200),
    marginTop: hp(24),
    marginBottom: hp(16),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.White,
  },
});
